import React, {Component} from 'react';
import styled from 'styled-components';
import {Titel2White} from "../helpers/styling-texts";

const Container = styled.div`
  width: 100%
  background-color: #8585ad
  color: white;
  padding: 2rem;
  box-sizing: border-box;
`;

class Infos extends Component {
    render(){
        return (
            <Container>
                <Titel2White>Information</Titel2White>

                <p>From 10th to 16th February 2019 we are packing our skis and snowboards to head to Anzère for an exiting Winter Week! Next to an awesome accommodation and nice ski slopes, Flämmli and Werwölfe are also waiting for you, like they always do! ;‑)</p>
                <p>It includes:
                    <ul>
                        <li>Accommodation in the group lodging of the <a tabindex='-1'href="http://www.anzere-vacances.ch/groupes">Hotel Zodiaque</a> in Anzère right at the end of the ski slopes</li>
                        <li>Ski pass "Anzère" for 7 days</li>
                        <li>Journey by Bus from and to Zurich</li>
                        <li>Nourishing breakfast, delicious dinners and the opportunity to make sandwiches for lunch</li>

                    </ul>
                </p>

                <p>Prices:
                    <ul>
                        <li> 600.-</li>
                        <li> 400.- without a skiing pass</li>
                        <li> ICU members pay 150.- less, due to the generosity of the ICU.</li>
                    </ul>
                </p>

                <p>The fine print:
                    <ul>
                        <li>With your registration, you register for the entire week and pay the price accordingly. We are not providing the option of joining for half or individual days for the Winter Week</li>
                        <li>Ski ticket:
                            <ul>
                                <li>The ticket is included in the price and it is valid for 7 days, which includes the day of arrival and departure.</li>
                                <li>It is NOT transferable</li>
                                <li>If you do not wish to have a ticket, you can indicate this in your registration.</li>
                            </ul>
                        </li>
                        <li>If you join the Winter Week, you need to help out the organizing committee and kitchen team if needed.</li>
                        <li>Every participant takes care of his or her own skiing or snowboarding equipment.</li>
                        <li>We ask you to pay the required fees, latest 5 days after receiving the confirmation of your registration.</li>
                        <li>In general, you should not count on getting a refund unless you have a valid reason for not being able to attend. Exams are not a valid reason, since you should know the exam dates in advance.</li>
                        <li>In general, people from the student assassinations ICU and FAPS will have priority in being able to attend if there are too many registrations.</li>
                        <li>Insurance is the responsibility of the participants.</li>
                    </ul>
                </p>


            </Container>

        )
    }
}

export default Infos;
