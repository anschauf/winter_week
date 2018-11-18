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
    render() {
        return (
            <Container>
                <Titel2White>Allgemeine Informationen</Titel2White>

                <p>From 10th to 16th February 2019 we are packing our skis and snowboards and are headed to <a href="https://www.anzere.ch">Anzère</a> for an exiting Winter Week!
                   Next to an awesome accomodation and nice ski slopes, Flämmli and Werwölfe are also waiting for you, like always! ;‑)</p>
                <p>Included:</p>
                <ul>
                    <il>Accomodation in the group lodging of the <a href="http://www.anzere-vacances.ch/groupes">Hotel Zodiaque</a> in Anzère right at the bottom of the ski slope</il>
                    <il>Ski Ticket "Anzère"  for 7 days</il>
                    <il>Journey by Bus from and to Zurich</il>
                    <il>Nourishous breakfast, delicious dinners and the opportunity to make sandwiches for lunch</il>
                    <il>Much fun, very wow</il>
                </ul>
                   
                <p>The fine print:</p>
                <ul>
                    <il>With your registration, you register for the entire week and pay the price accordingly. We are not providing the option of joining for half or individual days of the Winter Week</il>
                    <il>Ski ticket:
                        <ul>
                            <il>The ticket is included in the price and it is valid for 7 days, which includes the day of the arrival and departure.</il>
                            <il>It is NOT transferable</il>
                            <il>If you do not wish to have a ticket, you can indicate this in your registration.</il>
                        </ul>
                    </il>
                    <il>If you join the Winter Week, you will help out the organizing committee and kitchen team when needed.</il>
                    <il>Ski- / Snowboard-Ausrüstung organisieren ist Aufgabe der Teilnehmer.</il>
                    <il>Wir bitten euch, die Kosten für die Lagerteilnahme bis 5 Tage nach dem Erhalt der Bestätigung zu bezahlen.</il>
                    <il>Ohne triftigen Grund gibt es keine Rückerstattung der Kosten. (Mündliche Prüfungen oder Ähnliches zählen nicht als Grund.)</il>
                    <il>Es kann grundsätzlich nicht mit einer Rückerstattung gerechnet werden.</il>
                    <il>Grundsätzlich haben ICU/FAPS Mitglieder Vorrang, deshalb ist die Anmeldung für Externe erst zwei Wochen nach Anmeldunganfang möglich.</il>

                    <il>Versicherung ist Sache der Teilnehmer.</il>
                    <il>Alle Angaben ohne Gewähr</il>
                </ul>
            </Container>
        )
    }
}

export default Infos;
