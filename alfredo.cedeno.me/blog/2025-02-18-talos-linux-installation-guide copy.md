## Overview

This guide provides step-by-step instructions for setting up a [Talos Linux](https://www.talos.dev/v1.9/introduction/getting-started/) as a cluster on Proxmox VMs. It covers configuring the network, applying cluster configurations, and enabling the Tailscale extension.

## Prerequisites

- A Proxmox environment with at least two VMs (one control plane node, one worker node)
- Talos Linux 1.9.4
- [Talosctl](https://www.talos.dev/v1.9/introduction/getting-started/#talosctl) installed on your local machine
- [Tailscale](https://tailscale.com) account for secure networking

## Step 1: Acquire the Talos Linux image

The most general way to install Talos Linux is to use the ISO image.

The latest ISO image can be found on the Github [Releases](https://github.com/siderolabs/talos/releases) page:

- X86: [https://github.com/siderolabs/talos/releases/download/v1.9.4/metal-amd64.iso](https://github.com/siderolabs/talos/releases/download/v1.9.4/metal-amd64.iso)
- ARM64: [https://github.com/siderolabs/talos/releases/download/v1.9.4/metal-arm64.iso](https://github.com/siderolabs/talos/releases/download/v1.9.4/metal-arm64.iso)

When booted from the ISO, Talos will run in RAM and will not install to disk until provided a configuration. Thus, it is safe to boot any machine from the ISO.

At this point, you should:

- boot one machine off the ISO to be the control plane node
- boot one or more machines off the same ISO to be the workers
## Step 2: Set Up Environment Variables

Before starting the installation, define the required environment variables. These variables specify the control plane and worker node IPs, cluster name, and output directory for configuration files. Run the following commands:

```
export CONTROL_PLANE_IP=<IpAddr> # IP Address Assigned to ControlPlane
export WORKER_NODE_IP=<IpAddr> # IP Address Assigned to Worker
export CLUSTER_NAME=<cluster_name> # Name to assign to the Cluster
export OUTPUT_DIR=_out
```

## Step 3: Apply ControlPlane  Configuration 

Apply the generated configuration file to the worker node using Talos:

```
talosctl gen config $CLUSTER_NAME https://$CONTROL_PLANE_IP:6443 --output-dir $OUTPUT_DIR
```
_Note: To specify an installation disk, add_ `_--install-disk '/dev/<disk>'_`. By default the installation disk used is: `/dev/sda`

## Step 4: Apply Worker Node Configuration 

Apply the Talos configuration to the worker node using `talosctl apply-config`. This step provisions the worker node with the necessary setup.

```
talosctl apply-config --insecure --nodes $WORKER_NODE_IP --file _out/worker.yaml
```

This step ensures that the worker node is properly configured and connected to the Talos cluster. It applies the required settings, allowing the node to communicate with the control plane effectively.
## Step 5: Configure Talosctl

Set the Talos configuration file, define the endpoint, and select the control plane node for management using `talosctl config` commands.

```
export TALOSCONFIG="_out/talosconfig"
talosctl config endpoint $CONTROL_PLANE_IP
talosctl config node $CONTROL_PLANE_IP
```
## Step 6: Bootstrap the Control Plane

Initialise the control plane using `talosctl bootstrap`. This command sets up the Kubernetes control plane on the primary node.

```
talosctl bootstrap
```
## Step 7: Retrieve Kubeconfig

Extract the Kubeconfig file with `talosctl kubeconfig`. Use this file to interact with the Kubernetes cluster using `kubectl`.

```
talosctl kubeconfig .
```
## Step 8: Validate Cluster Status

Run `kubectl get nodes` and `kubectl get pods -n kube-system` to ensure that all nodes are running correctly and the cluster is operational.

```
kubectl get nodes --kubeconfig=kubeconfig
kubectl get pods -n kube-system --kubeconfig=kubeconfig
```
## Step 9: Retrieve Image Schematic ID from Talos Factory

Visit [Talos Factory](https://factory.talos.dev) to obtain an image schematic ID by selecting appropriate parameters such as hardware type and extensions.
    - **Hardware Type**: Bare-Metal Machine
    - **Talos Linux Version**: 1.9.4
    - **Machine Architecture**: amd64
    - **System Extensions**: `siderolabs/tailscale (1.78.1)`
 
Retrieve the **Image Schematic ID** (e.g., `4a0d65c669d46663f377e7161e50cfd570c401f26fd9e7bda34a0216b6f1922b`)
## Step 10: Upgrade Talos Linux

Use the retrieved schematic ID to upgrade Talos Linux on the machine by running `talosctl upgrade`. This ensures that the system is running the latest version.

```
talosctl upgrade --image factory.talos.dev/installer/<image-schematic-ID>:<talos-version> -m powercycle -f -e $CONTROL_PLANE_IP -n $CONTROL_PLANE_IP
```
## Step 11: Monitor the Upgrade

Open another terminal and monitor logs using `talosctl dmesg -f`. This helps in debugging any issues during the upgrade process, but first you need to run Step 5 in the new Terminal Windows.
```
talosctl dmesg -f -e $CONTROL_PLANE_IP -n $CONTROL_PLANE_IP
```
## Step 12: Verify Installed Extensions and Services

Run `talosctl get extensions` to check installed system extensions and verify if additional services are required.

```
talosctl get extensions
talosctl services
```
## Step 13: Configure Tailscale Extension

Create a `tailscale.patch.yaml` file with an authentication key from Tailscale. Apply this configuration to enable secure networking.

```
---
apiVersion: v1alpha1
kind: ExtensionServiceConfig
name: tailscale
environment:
- TS_AUTHKEY=tskey-auth-.......
```
**Note**: Obtain the `TS_AUTHKEY` from the Tailscale console.

Apply Tailscale Configuration:

```
talosctl apply-config -f _out/controlplane.yaml -p @tailscale.patch.yaml
```
## Step 14: Retrieve Tailnet IP

Visit the Tailscale console to get the assigned Tailnet IP for the node. This will be used to configure secure access.
## Step 15: Update Cluster Configuration

Modify the `controlplane.yaml` file to include the Tailnet IP in the `certSANs` located in the `machine` and `cluster` section. This allows Kubernetes API access over the Tailscale network.
 - `machine` section in `controlplane.yaml`
    ```
    certSANs:
      - <IpAddr>  # Tailnet IP
    ```
- `cluster` section in `controlplane.yaml`
    ```
    certSANs:
      - <IpAddr> # Local LAN IP
      - <IpAddr> # Tailnet IP
    ```
## Step 15: Apply Updated Configuration

Reapply the updated control plane configuration using `talosctl apply-config`. This ensures that changes are correctly propagated across the cluster.

```
talosctl apply-config -f _out/controlplane.yaml -p @tailscale.patch.yaml
```

## Conclusion

Your Talos cluster should now be running with networking enabled via Tailscale. Run `kubectl get nodes --kubeconfig=kubeconfig` and `talosctl services` to verify that the cluster is fully operational and all configurations have been applied successfully.

---
## Credits

This guide was made possible with insights and contributions from [Michael Levan](https://www.youtube.com/@CloudDevEngineering), whose expertise in Kubernetes and cloud-native technologies has been invaluable in simplifying complex DevOps workflows.

Additionally, special thanks to [Sidero Labs](https://www.youtube.com/@SideroLabs) for developing and maintaining Talos Linux, a cutting-edge, secure, and immutable operating system tailored for Kubernetes. Their work has been instrumental in enabling streamlined, automated cluster management.
