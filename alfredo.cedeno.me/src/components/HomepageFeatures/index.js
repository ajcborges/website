import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Professional focus',
    Svg: require('@site/static/img/undraw_dev-productivity_5wps.svg').default,
    description: (
      <>
        Designing and implementing creative solutions in Google Cloud Platform (GCP) 
        using Infrastructure-as-Code (IaC) tooling and Docker, making them more efficient 
        and cost-effective, while also ensuring are adaptable to future changes and growth.
      </>
    ),
  },
  {
    title: 'Driven by',
    Svg: require('@site/static/img/undraw_programming_65t2.svg').default,
    description: (
      <>
        Taking pride in my ability to plan and maintain various security settings, 
        and committed to continuous education and research to stay up-to-date 
        on industry trends and technologies.
      </>
    ),
  },
  {
    title: 'About Me',
    Svg: require('@site/static/img/undraw_male-avatar_zkzx.svg').default,
    //Svg: require('@site/static/img/about_me.jpeg').default,
    description: (
      <>
        DevSecOps Engineer with a passion for developing and implementing effective 
        security strategies, building strong teams, and safeguarding company information. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
