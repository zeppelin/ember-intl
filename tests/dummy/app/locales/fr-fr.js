export default {
    locale: "fr-FR",
    messages: {
        product: {
            info: '{product} coûtera {price, number, EUR} si triés par {deadline, date, time}',
            html: {
                info: '<strong>{product}</strong> coûtera <em>{price, number, EUR}</em> si triés par {deadline, date, time}'
            }
        }
    },
    fields: {"year":{"displayName":"année","relative":{"0":"cette année","1":"l’année prochaine","-1":"l’année dernière"},"relativeTime":{"future":{"one":"dans {0} an","other":"dans {0} ans"},"past":{"one":"il y a {0} an","other":"il y a {0} ans"}}},"month":{"displayName":"mois","relative":{"0":"ce mois-ci","1":"le mois prochain","-1":"le mois dernier"},"relativeTime":{"future":{"one":"dans {0} mois","other":"dans {0} mois"},"past":{"one":"il y a {0} mois","other":"il y a {0} mois"}}},"day":{"displayName":"jour","relative":{"0":"aujourd’hui","1":"demain","2":"après-demain","-2":"avant-hier","-1":"hier"},"relativeTime":{"future":{"one":"dans {0} jour","other":"dans {0} jours"},"past":{"one":"il y a {0} jour","other":"il y a {0} jours"}}},"hour":{"displayName":"heure","relativeTime":{"future":{"one":"dans {0} heure","other":"dans {0} heures"},"past":{"one":"il y a {0} heure","other":"il y a {0} heures"}}},"minute":{"displayName":"minute","relativeTime":{"future":{"one":"dans {0} minute","other":"dans {0} minutes"},"past":{"one":"il y a {0} minute","other":"il y a {0} minutes"}}},"second":{"displayName":"seconde","relative":{"0":"maintenant"},"relativeTime":{"future":{"one":"dans {0} seconde","other":"dans {0} secondes"},"past":{"one":"il y a {0} seconde","other":"il y a {0} secondes"}}}},
    pluralRuleFunction: function (n) {var i=Math.floor(Math.abs(n));n=Math.floor(n);if(i===0||i===1)return"one";return"other";}
}
