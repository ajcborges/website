"use strict";(self.webpackChunksite_cedeno_me=self.webpackChunksite_cedeno_me||[]).push([[8004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:2},i="Pre-Installation",s={unversionedId:"selfhostcloud-containers/portainer/portainer-preinstallation",id:"selfhostcloud-containers/portainer/portainer-preinstallation",title:"Pre-Installation",description:"Network",source:"@site/docs/selfhostcloud-containers/portainer/portainer-preinstallation.md",sourceDirName:"selfhostcloud-containers/portainer",slug:"/selfhostcloud-containers/portainer/portainer-preinstallation",permalink:"/docs/selfhostcloud-containers/portainer/portainer-preinstallation",draft:!1,editUrl:"https://github.com/ajcborges/website/tree/main/alfredo.cedeno.me/docs/selfhostcloud-containers/portainer/portainer-preinstallation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What's Portainer",permalink:"/docs/selfhostcloud-containers/portainer/portainer-intro"},next:{title:"Installation",permalink:"/docs/selfhostcloud-containers/portainer/portainer-installation"}},l={},c=[{value:"Network",id:"network",level:2},{value:"Volumes",id:"volumes",level:2},{value:"Instalation Methods",id:"instalation-methods",level:2},{value:"Using Terraform",id:"using-terraform",level:3},{value:"Using Docker Compose",id:"using-docker-compose",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pre-installation"},"Pre-Installation"),(0,r.kt)("h2",{id:"network"},"Network"),(0,r.kt)("p",null,"In the SelfHostCloud Lab, containers are being categorized as either frontend or backend. The frontend network is the only one that the user can interact with, while the application interacts with the backend network internally when needed. This approach helps to simplify the user experience while maintaining the necessary internal complexity to support the application's functionality."),(0,r.kt)("p",null,"When creating a network in Docker, the command to use is ",(0,r.kt)("inlineCode",{parentName:"p"},"docker network create"),". By default, the bridge driver is used if no other driver is specified with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--driver")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," flag. "),(0,r.kt)("p",null,"The subnet, or IP pool, can also be specified using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--subnet")," flag, but if it is not specified, Docker will automatically configure it. This provides flexibility in creating and managing networks within Docker."),(0,r.kt)("p",null,"To deploy the ",(0,r.kt)("strong",{parentName:"p"},"SelfHostCloud Lab"),", we need to create three (3) new Docker networks: ",(0,r.kt)("strong",{parentName:"p"},"proxy"),", ",(0,r.kt)("strong",{parentName:"p"},"socket_proxy"),", and ",(0,r.kt)("strong",{parentName:"p"},"apps"),"."),(0,r.kt)("p",null,"To create these networks, follow the steps in the ",(0,r.kt)("strong",{parentName:"p"},"Installation")," section, which outlines the specific instructions based on the method used."),(0,r.kt)("h2",{id:"volumes"},"Volumes"),(0,r.kt)("p",null,"To automate a container with data, one possible approach is to save the data in the container image. Nevertheless, this strategy involves duplicating the data in every container instance, which could result in resource inefficiencies when scaling up the containers. "),(0,r.kt)("p",null,"An alternative solution is to store a single copy of the data in a Docker volume and use it across multiple containers."),(0,r.kt)("p",null,"We may want to use persistence volumes for Docker containers to ensure that your data remains available even if the container is terminated, updated, or replaced. By saving data in a persistent volume, you can separate the stateful data from the stateless container, making it easier to manage and scale your containerized applications."),(0,r.kt)("p",null,"Additionally, persistent volumes allow you to share data between containers and persist data beyond the life cycle of a single container. This makes it possible to update or replace containers without losing valuable data or configuration information."),(0,r.kt)("p",null,"Overall, using persistent volumes can improve the reliability, flexibility, and efficiency of your containerized applications."),(0,r.kt)("p",null,"In the SelfHostCloud Lab, volumes are declared when we building a container."),(0,r.kt)("h2",{id:"instalation-methods"},"Instalation Methods"),(0,r.kt)("h3",{id:"using-terraform"},"Using Terraform"),(0,r.kt)("p",null,"Terraform is an open-source infrastructure-as-code tool that allows you to provision and manage infrastructure resources across multiple cloud providers, such as AWS, Azure, and Google Cloud Platform. With Terraform, you can write code to define the desired state of your infrastructure, and then use Terraform to apply that code to create or modify the resources to match that state."),(0,r.kt)("p",null,"To deploy containers in Docker using Terraform, you can use the Docker provider for Terraform. The Docker provider allows you to create and manage Docker containers, images, networks, and volumes through Terraform code. To use the Docker provider, you need to include it in your Terraform configuration file and define the resources you want to create or manage."),(0,r.kt)("p",null,"Here's an example of how you can use Terraform to deploy a Docker container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'provider "docker" {\n  host = "tcp://localhost:2376/"\n}\n\nresource "docker_image" "nginx" {\n  name = "nginx:latest"\n}\n\nresource "docker_container" "web" {\n  name  = "web"\n  image = docker_image.nginx.latest\n\n  ports {\n    internal = 80\n    external = 8080\n  }\n}\n')),(0,r.kt)("p",null,"In this example, we're using the Docker provider to deploy an NGINX container. First, we define a Docker image resource to pull the latest NGINX image. Then, we define a Docker container resource to create a new container based on that image, with port 80 mapped to port 8080 on the host."),(0,r.kt)("p",null,"To apply this Terraform configuration, you can run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"terraform init\nterraform plan\nterraform apply\n")),(0,r.kt)("p",null,"These commands will initialize the Terraform environment, show you a plan of the changes that will be made, and apply those changes to create the NGINX container."),(0,r.kt)("h3",{id:"using-docker-compose"},"Using Docker Compose"),(0,r.kt)("p",null,"Docker Compose is a tool that allows you to define and run multi-container Docker applications. It uses a YAML file to define the services, networks, and volumes for your application, and then allows you to launch and manage all of these containers as a single application. Docker Compose is useful for developers and teams who need to manage complex applications with multiple dependencies, such as web applications with a database and a cache."),(0,r.kt)("p",null,"To deploy containers in Docker using Docker Compose, you need to define your application's services, networks, and volumes in a YAML file called docker-compose.yml. Here's an example of how you can use Docker Compose to deploy a web application with a database:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"version: '3'\n\nservices:\n  web:\n    build: .\n    ports:\n      - \"5000:5000\"\n  db:\n    image: postgres\n    volumes:\n      - db-data:/var/lib/postgresql/data\n    environment:\n      POSTGRES_USER: user\n      POSTGRES_PASSWORD: password\n\nvolumes:\n  db-data:\n")),(0,r.kt)("p",null,"In this example, we're defining two services: a web service and a database service. The web service is built from the current directory, and its port 5000 is mapped to the host's port 5000. The database service uses the official Postgres image, and creates a volume to store its data. We also set some environment variables for the database service."),(0,r.kt)("p",null,"To launch this application with Docker Compose, you can run the following command in the same directory as your ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose up\n")),(0,r.kt)("p",null,"This will start all of the containers defined in your ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file, and you can access your web application at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:5000"),". If you want to stop and remove all of the containers, networks, and volumes created by Docker Compose, you can run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose down\n")),(0,r.kt)("p",null,"Overall, Docker Compose simplifies the process of deploying and managing multi-container applications, allowing you to focus on developing your application without worrying about the underlying infrastructure."))}d.isMDXComponent=!0}}]);