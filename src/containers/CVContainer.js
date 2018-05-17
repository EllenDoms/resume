import React, { Component } from 'react';
import '../style/cv.css';
import { connect } from 'react-redux';
import Tooltip from '../containers/Tooltip';
import { fetchJson } from '../actions';

class Cv extends Component {
  componentDidMount() {
    const url = process.env.PUBLIC_URL + '/inputFile.json';
    this.props.fetchJson(url);
  }
  render() {
    const json = this.props.json;
    if (!json.information) {
      return <div>Loading...</div>;
    }

    return (
      <div id='IndexPage'>
        <div id='resume'>
          <div id='page1'>
            <div id='headerbg'/>
            <div id='header'>
              <div id='triangle1'></div>
              <h1>"{json.information.quote}"</h1>
              <div id='signed'>- {json.information.firstName} {json.information.lastName} -</div>
            </div>
            <div className='flexcontent'>
              <div className='columnLeft timeline'>
                <div className='container'>
                  <div id='experience' className='block'>
                    <h2>Experience </h2>
                    <Tooltip mode={json.tooltips.experience} />
                    <div className='content'>
                      {json.experience.map((item,i) => {
                        return (
                          <div className='item' key={'experience' + i}>
                            <p className='time left'>{item.timeto + ' ' + item.timefrom}</p>
                            <h3 className='right'>{item.title}</h3>
                            <p className='right'>{item.where}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div id='education' className='block'>
                    <h2>Education</h2>
                    <Tooltip mode={json.tooltips.education} />
                    <div className='content'>
                      {json.education.map((item,i) => {
                        return (
                          <div className='item' key={'skill' + i}>
                            <p className='time left'>{item.timeto + ' ' + item.timefrom}</p>
                            <h3 className='right'>{item.title}</h3>
                            <p className='right'>{item.where}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className='columnRight'>
                <div id='skills' className='block'>
                  <h2>Skills</h2>
                  <Tooltip mode={json.tooltips.skills} />
                  <div className='content'>
                    {json.skills.map((item,i) => {
                      return <p key={'skill' +i} className='left'>{item}</p>
                    })}
                  </div>
                </div>
                <div id='expertise' className='block'>
                  <h2>Expertise</h2>
                  <Tooltip mode={json.tooltips.expertise} />
                  <div className='content'>
                    {json.expertise.map((item,i) => {
                      return (
                        <div key={'expertise' + i} className='item'>
                          <p className='left'>{item.title}</p>
                          <div className='barRating'>
                            <div className='bar'></div>
                            <div className='rating' style={{width: item.rating + '%'}} />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div id='triangles'>
              <div id='triangle2' />
              <div id='triangle3' />
            </div>
          </div>
          <div id='page2'>
            <div id='why' className='columncenter block'>
              <div id='triangle4' />
              <h1>{json.intro.title}</h1>
              <Tooltip mode={json.tooltips.intro} />
              <div className='content'>
                <div className='outline'>
                  {json.intro.content.map((paragraph,i) => {
                    return <p key={'paragraph'+ i}>{paragraph}</p>
                  })}
                </div>
              </div>
            </div>

            <div className='container'>
              <div className='flexcontent center'>
                <div className='columnLeft'>
                  <div id='personality' className='block'>
                    <h2>Personality</h2>
                    <Tooltip mode={json.tooltips.personality} />
                    <div className='content'>
                      {json.personality.map((item,i) => {
                        return (
                          <div key={'personality' + i}>
                            <p className='center'>{item}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className='columnRight'>
                  <div id='passions' className='block'>
                    <h2>Passions</h2>
                    <Tooltip mode={json.tooltips.passions} />
                    <div className='content'>
                      {json.passions.map((item,i) => {
                        return (
                          <div key={'passion' + i}>
                            <p className='center'>{item}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div id='information' className='flexcontent'>
                <div className='columnLeft'>
                  <Tooltip mode={json.tooltips.information} />
                  <p>{json.information.email}</p>
                  <a href={'http://www.' + json.information.website}><p>{json.information.website}</p></a>
                  <p>{json.information.telephone}</p>
                </div>
                <div className='columnRight'>
                  <a href={'http://www.' + json.information.linkedin}><p><span className="fa fa-linkedin-square" />{json.information.linkedin}</p></a>
                  <a href={'http://www.' + json.information.dribbble}><p><span className="fa fa-dribbble" />{json.information.dribbble}</p></a>
                  <a href={'http://www.' + json.information.github}><p><span className="fa fa-github" />{json.information.github}</p></a>
                </div>
              </div>

            </div>
            <div id='footer'>
              <div id='triangle5' />
            </div>
          </div>
        </div>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return{
    json: state.json
  };
}

export default connect(mapStateToProps, { fetchJson })(Cv);
