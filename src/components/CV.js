import { Component } from "react";
import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontSize: 50,
    fontFamily: "Arial",
    fontWeight: 600,
    margin: "20px 20px",
    fontStyle: "italic",
  },
  inputHeading: {
    fontWeight: 600,
    marginLeft: 40,
    fontSize: 16,
  },
  educationDates: {
    position: "absolute",
    left: "620px",
    width: "100%",
  },
  subheading: {
    marginLeft: 40,
    fontStyle: "italic",
  },
  experiencePosition: {
    position: "absolute",
    left: "620px",
    width: "100%",
    fontStyle: "italic",
  },
});

class CV extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ display: this.props.info.styles ? "block" : "none" }}>
        <Document className="mainDoc">
          <Page style={this.page}>
            <div id="pdfContainer">
              <div className="pdf">
                <div id="cvName">
                  <Text style={styles.page}>{this.props.info.name}</Text>
                </div>
                <Text id="cvEmail">{this.props.info.email}</Text>
                <Text id="cvNumber">{this.props.info.number}</Text>
                <div className="headerContainer">
                  <Text className="header">Education</Text>
                </div>
                <div id="cvEducation">
                  <Text style={styles.inputHeading}>
                    {this.props.info.school}
                  </Text>
                  <Text style={styles.educationDates}>
                    {this.props.info.eduBegin}-{this.props.info.eduEnd}
                  </Text>
                </div>
                <Text style={styles.subheading}>{this.props.info.major}</Text>
                <div className="headerContainer">
                  <Text className="header">Experience</Text>
                </div>
                <div className="cvExperience">
                  <Text style={styles.inputHeading}>
                    {this.props.info.company[0]}
                  </Text>
                  <Text style={styles.experiencePosition}>
                    {this.props.info.company[1]}
                  </Text>
                </div>
                <Text style={styles.subheading}>
                  {this.props.info.company[2]}
                </Text>
                <div className="cvExperience">
                  <Text style={styles.inputHeading}>
                    {this.props.info.company[3]}
                  </Text>
                  <Text style={styles.experiencePosition}>
                    {this.props.info.company[4]}
                  </Text>
                </div>
                <Text style={styles.subheading}>
                  {this.props.info.company[5]}
                </Text>
                <div className="cvExperience">
                  <Text style={styles.inputHeading}>
                    {this.props.info.company[6]}
                  </Text>
                  <Text style={styles.experiencePosition}>
                    {this.props.info.company[7]}
                  </Text>
                </div>
                <Text style={styles.subheading}>
                  {this.props.info.company[8]}
                </Text>
              </div>
            </div>
          </Page>
        </Document>
        <div className="editButton">
          <button onClick={this.props.edit}>Edit</button>
          <PDFDownloadLink
            document={
              <Document className="mainDoc">
                <Page style={this.page}>
                  <div id="pdfContainer">
                    <div className="pdf">
                      <div id="cvName">
                        <Text style={styles.page}>{this.props.info.name}</Text>
                      </div>
                      <Text id="cvEmail">{this.props.info.email}</Text>
                      <Text id="cvNumber">{this.props.info.number}</Text>
                      <div className="headerContainer">
                        <Text className="header">Education</Text>
                      </div>
                      <div id="cvEducation">
                        <Text style={styles.inputHeading}>
                          {this.props.info.school}
                        </Text>
                        <Text style={styles.educationDates}>
                          {this.props.info.eduBegin}-{this.props.info.eduEnd}
                        </Text>
                      </div>
                      <Text style={styles.subheading}>
                        {this.props.info.major}
                      </Text>
                      <div className="headerContainer">
                        <Text className="header">Experience</Text>
                      </div>
                      <div className="cvExperience">
                        <Text style={styles.inputHeading}>
                          {this.props.info.company[0]}
                        </Text>
                        <Text style={styles.experiencePosition}>
                          {this.props.info.company[1]}
                        </Text>
                      </div>
                      <Text style={styles.subheading}>
                        {this.props.info.company[2]}
                      </Text>
                      <div className="cvExperience">
                        <Text style={styles.inputHeading}>
                          {this.props.info.company[3]}
                        </Text>
                        <Text style={styles.experiencePosition}>
                          {this.props.info.company[4]}
                        </Text>
                      </div>
                      <Text style={styles.subheading}>
                        {this.props.info.company[5]}
                      </Text>
                      <div className="cvExperience">
                        <Text style={styles.inputHeading}>
                          {this.props.info.company[6]}
                        </Text>
                        <Text style={styles.experiencePosition}>
                          {this.props.info.company[7]}
                        </Text>
                      </div>
                      <Text style={styles.subheading}>
                        {this.props.info.company[8]}
                      </Text>
                    </div>
                  </div>
                </Page>
              </Document>
            }
            fileName="CV"
            style={{ marginLeft: "24.5vw", width: "100%", marginTop: "10px" }}
          >
            {({ loading }) =>
              loading ? (
                <button>Loading Document</button>
              ) : (
                <button>Download</button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
    );
  }
}

export default CV;
