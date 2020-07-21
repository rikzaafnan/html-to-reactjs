import React from 'react'

import Section from 'elements/Section'

import FeatureTileIcon01 from 'assets/images/feature-tile-icon-01.svg'
import FeatureTileIcon02 from 'assets/images/feature-tile-icon-02.svg'
import FeatureTileIcon03 from 'assets/images/feature-tile-icon-03.svg'


import Fade from 'react-reveal/Fade'

export default function FeaturesTiles() {
    return (
        <Section className="features-tiles">
            <div className="container">
                <div className="features-tiles-inner section-inner">
                    <div className="tiles-wrap">
                        
                        <div className="tiles-item ">
                        <Fade bottom delay={150}>

                            <div className="tiles-item-inner">

                                <div className="features-tiles-item-header">
                                    <div
                                        className="features-tiles-item-image mb-16"
                                    >
                                        <img
                                            src={FeatureTileIcon01}
                                            alt="Feature tile icon 01"
                                            width="64"
                                            height="64"
                                        />
                                    </div>
                                </div>

                                <div
                                    className="features-tiles-item-content"
                                >
                                    <h4 className="mt-0 mb-8">
                                        Join the system
                                    </h4>
                                    <p className="m-0 text-sm">
                                        A pseudo-Latin text used in web
                                        design, layout, and printing in
                                        place of things to emphasise
                                        design.
                                    </p>
                                </div>
                            </div>
                        </Fade>

                        </div>
                        <div
                            className="tiles-item "
                        >
                        <Fade bottom delay={200}>

                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div
                                        className="features-tiles-item-image mb-16"
                                    >
                                        <img
                                            src={FeatureTileIcon02}
                                            alt="Feature tile icon 02"
                                            width="64"
                                            height="64"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="features-tiles-item-content"
                                >
                                    <h4 className="mt-0 mb-8">
                                        Join the system
                                    </h4>
                                    <p className="m-0 text-sm">
                                        A pseudo-Latin text used in web
                                        design, layout, and printing in
                                        place of things to emphasise
                                        design.
                                    </p>
                                </div>
                            </div>
                        </Fade>
                        
                        </div>
                        <div
                            className="tiles-item "
                        >

                        <Fade bottom delay={400}>

                            <div className="tiles-item-inner">
                                <div className="features-tiles-item-header">
                                    <div
                                        className="features-tiles-item-image mb-16"
                                    >
                                        <img
                                            src={FeatureTileIcon03}
                                            alt="Feature tile icon 03"
                                            width="64"
                                            height="64"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="features-tiles-item-content"
                                >
                                    <h4 className="mt-0 mb-8">
                                        Join the system
                                    </h4>
                                    <p className="m-0 text-sm">
                                        A pseudo-Latin text used in web
                                        design, layout, and printing in
                                        place of things to emphasise
                                        design.
                                    </p>
                                </div>
                            </div>
                        </Fade>
                        
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
