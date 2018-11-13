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

                <p>Vom 10. bis 16. Februar 2019 reisen alle Wintersportverrückten nach <a href="https://www.anzere.ch">Anzère</a>!
                   Nebst toller Unterkunft und schönem Skigebiet erwarten euch wie immer Flämmli und Werwölfe ;‑)</p>
                <p>Imbegriffen:</p>
                <ul>
                    <il>Unterkunft in der Gruppenunterkunft im <a href="http://www.anzere-vacances.ch/groupes">Hotel Zodiaque</a> in Anzère</il>
                    <il>Ski Ticket "Anzère" (für 5 Tage)</il>
                    <il>Reise mit Car (Hin- und Rückreise ab/bis Zürich)
                    WICHTIG: Möchtest du nicht mit dem Car mit uns reisen, dann schreibe uns doch bitte nach deiner Anmeldung eine Email. Für die Anreise und/oder Rückreise bist du dann selber zuständig.</il>
                    <il>Köstliche Mahlzeiten (Frühstücksbuffet morgens und 2-3 Gang-Menü abends). Dieses Jahr wieder mit eigener Küche.
                    Fürs Mittagessen werdet ihr Gelegenheit haben Sandwiches zu machen.
                    Selbstverständlich gibt es auch im Skigebiet mehrere Restaurants.
                    <il>Much fun, very wow</il>
                   
                <p>Das Kleingedruckte:</p>
                <ul>
                    <il>Mit Deiner Anmeldung meldest du dich für eine ganze Woche an und bezahlst auch den entsprechenden Preis.  Leider können wir keine Halbwochen-Aufenthalte, bzw. einzelne Tage anbieten.</il>
                    <il>Skiticket:
                        <ul>
                            <il>Das Skiticket ist im Preis inbegriffen und ist gültig für 5 Tage.</il>
                            <il>Das Skiticket ist NICHT übertragbar!</il>
                            <il>Falls du kein Skiticket möchtest, kannst du das bei der Anmeldung auswählen.</il>
                        </ul>
                    </il>
                    <il>Wer teilnimmt, ist hilfsbereit und steht unserem netten OK zur Seite.</il>
                    <il>Ski- / Snowboard-Ausrüstung organisieren ist Aufgabe der Teilnehmer.</il>
                    <il>Wir bitten euch, die Kosten für die Lagerteilnahme bis 5 Tage nach dem Erhalt der Bestätigung zu bezahlen.</il>
                    <il>Ohne triftigen Grund gibt es keine Rückerstattung der Kosten. (Mündliche Prüfungen oder Ähnliches zählen nicht als Grund.)</il>
                    Es kann grundsätzlich nicht mit einer Rückerstattung gerechnet werden.</il>
                    <il>Grundsätzlich haben ICU/FAPS Mitglieder Vorrang, deshalb ist die Anmeldung für Externe erst zwei Wochen nach Anmeldunganfang möglich.</il>

                    <il>Versicherung ist Sache der Teilnehmer.</il>
                    <il>Alle Angaben ohne Gewähr</il>
                </ul>
            </Container>
    }
}

export default Infos;
