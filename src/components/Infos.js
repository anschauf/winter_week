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

const Container2 = styled.div`
  width: 100%
  background-color: #6f7c94
  color: white;
  padding: 2rem;
  box-sizing: border-box;
`;

class Infos extends Component {
    render(){
        return (
            <div>
            <Container>
                <Titel2White>Anreise</Titel2White>

                <p>Wir reisen alle gemeinsam mit dem Car nach Anzére:
                    <ul>
                        <li>Treffpunkt um 7.00 Uhr am Carparkplatz Sihlquai</li>
                        <li>Abfahrt um 7.30 Uhr</li>
                        <li>Ankuft in Anzere ca. 12 Uhr, Journey by Bus from and to Zurich</li>
                        <li>Bei Anfunkt werden wir zuerst das Gepäck ins Hotel bringen und dann geht es gleich auf die Piste!</li>
                    </ul>
                </p>
                <p>Die Rückfahrt ist auf 17 Uhr geplant und somit sollten wir um ca. 21 Uhr in Zürich ankommen.
                </p>

                <Titel2White>Mahlzeiten</Titel2White>
                <p>Folgende Zeiten haben wir für die Mahlzeiten festgelegt:
                    <ul>
                        <li>Frühstück fängt 45 Minuten vor Pistenöffnung an, also um 8 Uhr. Ab ca 9 Uhr räumt die Küche das Frühstuck wieder weg.</li>
                        <li>Fürs Mittagessen werdet ihr Gelegenheit haben Sandwiches zu machen. Selbstverständlich gibt es auch im Skigebiet mehrere Restaurants.</li>
                        <li>Abendessen ca. 19.00-19.30</li>
                        <li>Am Sonntagabend können die jenigen, welche ein Bierglas bei der Anmeldung bestellt haben, dies für xxFr. beziehen.</li>
                    </ul>
                </p>
                <p>Es gelten folgende Küchenregeln zu jeder Tageszeit:
                    <ul>
                        <li>Die Küche wird nur vom Küchenteam betreten.</li>
                        <li>Nach dem Abedendessen werden 5-6 Leute dem Küchenteam beim Abwaschen und Aufräumen helfen.</li>
                        <li>Wir empfehlen einen äusserts freundlichen Umgang mit dem Küchenteam - sie kochen für euch!</li>
                    </ul>
                </p>

				<Titel2White>Rahmenprogramm</Titel2White>

               <ul>
                    <li>Sonntag Abend: Pub Crawl</li>
                    <li>Mittwoch Nachmittag: Schwimmbad Besuch</li>
                    <li>Freitag: Pisten-Postenlauf</li>
                    <li>Montag oder Dienstag Abend: Jass- und Beerpong-Turnier</li>
                </ul>

			</Container>

			<Container2>

                <Titel2White>Informationen zu Anzere</Titel2White>

                <ul>
                    <li>Die Lifte öffnen um 8.45 und schliessen um 16.00.</li>
                    <li>Ein Fun Park befindet sich in der Nähe des Dorfliftes (Rue du Nord).</li>
                    <li>In Anzére hat es auch Free Ride gebiete, die sind auf dieser <a href="https://www.anzere.ch/tourismus-ski-spa/freeridezone-663.html">Seite</a> gekennzeichnet.</li>
                    <li>Auf dieser <a href="https://www.anzere.ch/tourismus-ski-spa/wochenprogramm-758.html">Seite</a> findet ihr weitere Events, viele davon gratis, welche in Anzere angeboten werden.
                        Zum Beispiel: ein Air-Board Schnupperkurs und eine geführte Schneeschuh-Wanderung um Anzére</li>
                </ul>

                
                <Titel2White>Mitnehmen</Titel2White>

               <ul>
                    <li>Schlafsack und Fixleintuch, falls du keine Bettwäsche bestellt hast bei der Anmeldung</li>
                    <li>Handtuch</li>
                    <li>Badesachen</li>
                    <li>(Karten-)Spiele</li>
                    <li>Ski / Snowboard & Ausrüstung</li>
                    <li>Hausschuhe</li>
                    <li>genügend saubere Wäsche ;-)</li>
        			<li>gute Laune</li>
        			<li>Persönliches</li>
        			<li>Schnaps</li>
        			<li>etc...</li>
                </ul>

            </Container2>
            </div>

        )
    }
}

export default Infos;
