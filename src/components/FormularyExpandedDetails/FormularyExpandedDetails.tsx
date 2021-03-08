import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import FrxProcessStepper from "./../shared/FrxProcessStepper/FrxProcessStepper";
import FrxMiniTabs from "./../shared/FrxMiniTabs/FrxMiniTabs";
import "./FormularyExpandedDetails.scss";
import RadioButton from "../shared/Frx-components/radio-button/RadioButton";
import PanelHeader from "../shared/Frx-components/panel-header/PanelHeader";

const miniTabs = [
  { id: 1, text: "General" },
  { id: 2, text: "Medicare" },
  { id: 3, text: "Formulary Design" },
  { id: 4, text: "Tiers" },
  { id: 5, text: "Supplemental Benefits/Alternative Model" },
];

const miniCommercialTabs = [
  { id: 1, text: "General" },
  { id: 2, text: "Formulary Design" },
  { id: 3, text: "Tiers" },
];

interface props {
  selectedModule: any;
}

export default function FormularyExpandedDetails(props: any) {
  const [activeMiniTabIndex, setActiveMiniTabIndex] = useState(0);
  return (
    <div className="formulary-expanded-details">
      <Paper elevation={0}>
        <div className="formulary-expanded-details__container">
          {/* Left Container Starting*/}
          <div className="formulary-expanded-details-left">
            <div className="formulary-expanded-details-left__container">
              <div className="formulary-expanded-details-left__title">
                Versions
              </div>
              <div className="formulary-expanded-details-left__list">
                <div className="formulary-expanded-details-left__list-item">
                  <span className="formulary-expanded-details-left__list-item-indicator formulary-expanded-details-left__list-item-indicator--active" />
                  Version 4
                </div>
                <div className="formulary-expanded-details-left__list-item">
                  <span className="formulary-expanded-details-left__list-item-indicator formulary-expanded-details-left__list-item-indicator--active" />
                  Version 3
                </div>
                <div className="formulary-expanded-details-left__list-item">
                  <span className="formulary-expanded-details-left__list-item-indicator formulary-expanded-details-left__list-item-indicator--inactive" />
                  Version 2
                </div>

                <div className="formulary-expanded-details-left__list-add-item">
                  + add new version
                </div>
              </div>
            </div>
          </div>
          {/* Left Container Ending*/}

          {/* Right Container Starting*/}

          <div className="formulary-expanded-details-right">
            <div className="formulary-expanded-details-right__header">
              <FrxProcessStepper />
            </div>
            <div className="formulary-expanded-details-right__tabs">
              {props.selectedModule === "commercial" ? (
                <FrxMiniTabs
                  tabList={miniCommercialTabs}
                  activeTabIndex={activeMiniTabIndex}
                  onClickTab={(selectedTabIndex) =>
                    setActiveMiniTabIndex(selectedTabIndex)
                  }
                />
              ) : (
                <FrxMiniTabs
                  tabList={miniTabs}
                  activeTabIndex={activeMiniTabIndex}
                  onClickTab={(selectedTabIndex) =>
                    setActiveMiniTabIndex(selectedTabIndex)
                  }
                />
              )}
            </div>

            {activeMiniTabIndex === 0 && (
              <div className="formulary-expanded-details-right__content">
                <div className="formulary-info-field">
                  <div className="formulary-info-field__label">
                    FORMULARY TYPE{" "}
                    <span className="formulary-info-field__required">*</span>
                  </div>
                  {props.selectedModule === "commercial" ? (
                    <div className="formulary-info-field__value">
                      Commercial
                    </div>
                  ) : (
                    <div className="formulary-info-field__value">Medicare</div>
                  )}
                </div>

                <div className="formulary-info-field">
                  <div className="formulary-info-field__label">
                    FORMULARY NAME{" "}
                    <span className="formulary-info-field__required">*</span>
                  </div>
                  <div className="formulary-info-field__value">
                    2021Care1777
                  </div>
                </div>

                <div className="formulary-info-field">
                  <div className="formulary-info-field__label">
                    ABBREVIATION
                  </div>
                  {props.selectedModule === 'medicare' ? 
                  <div className="formulary-info-field__value">Medicare</div>
                  :
                  <div className="formulary-info-field__value">CARE</div>
                  }
                </div>

                <div className="formulary-info-field">
                  <div className="formulary-info-field__label">
                    Method of Formulary Build
                    <span className="formulary-info-field__required">*</span>
                  </div>
                  <div className="formulary-info-field__value">
                    <div className="radio-group">
                      <RadioButton label="Clone" name="info-radio" checked />
                      <RadioButton label="Upload" name="info-radio"  />
                      <RadioButton label="Create New" name="info-radio"  />
                    </div>
                  </div>
                </div>

                <div className="formulary-info-field">
                <div className="formulary-info-field__label">
                  CLONE FORMULARY
                  <span className="formulary-info-field__required">*</span>
                </div>      
                  {props.selectedModule === 'medicare' ?                            
                    <div className="formulary-info-field__value">
                      <a className="input-link ">Clone Formulary</a>
                    </div>
                  :                                   
                    <div className="formulary-info-field__value">
                      <a className="input-link ">Clone Formulary</a>
                    </div>
                  }
                </div>

                <div className="formulary-info-field">
                  <div className="formulary-info-field__label">
                    EFFECTIVE DATE
                    <span className="formulary-info-field__required">*</span>
                  </div>
                  <div className="formulary-info-field__value">10/03/2020</div>
                </div>

                <div className="formulary-info-field">
                  <div className="formulary-info-field__label">
                    SERVICE YEAR
                    <span className="formulary-info-field__required">*</span>
                  </div>
                  <div className="formulary-info-field__value">2021</div>
                </div>

                <div className="formulary-info-field">
                  <div className="formulary-info-field__label">
                    FORMULARY DESCRIPTION
                  </div>
                  <div className="formulary-info-field__value">
                    This is a formulary description. This is a formulary
                    desciption.
                  </div>
                </div>
                {props.selectedModule === "medicare" ? (
                  <div className="formulary-info-field">
                    <div className="formulary-info-field__label">
                      Which prior year's formulary does this most closely
                      resemble?
                    </div>
                    <div className="formulary-info-field__value">2019</div>
                  </div>
                ):
                <div className="formulary-info-field"></div>
                }

                <div className="formulary-info-field">
                  <div className="formulary-info-field__label">
                    {props.selectedModule === "medicare"?
                    <div>FORMULARY CLASSIFICATION SYSTEM</div>
                    :
                    <PanelHeader
                    title="FORMULARY CLASSIFICATION SYSTEM"
                    tooltip="FORMULARY CLASSIFICATION SYSTEM"
                  />
                   }                
                    
                  </div>
                  {props.selectedModule === 'medicare' ?  
                  <div className="formulary-info-field__value">Radios</div>:
                  <RadioButton label="Medispan" name="info-classification-radio" checked />
                }

                </div>
                {props.selectedModule === "medicare" && (
                  <div className="formulary-info-field">
                    <div className="formulary-info-field__label">
                      SUBMISSION MONTH
                    </div>
                    <div className="formulary-info-field__value">October</div>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* Right Container Ending*/}
        </div>
      </Paper>
    </div>
  );
}

//export default FormularyExpandedDetails
