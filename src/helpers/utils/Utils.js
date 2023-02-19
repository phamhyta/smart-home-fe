import moment from "moment";

const Utils = {
    formatDateTime: (sDateTime, sFormat = "DD/MM/YYYY HH:mm", utc = false) => {
        if (utc) {
          return moment(sDateTime).utc().format(sFormat);
        }
        return moment(sDateTime).local().format(sFormat);
      },
    
      // add date time
      formatAddDateTime: (sDateTime, amount, unit, sFormat, utc = false) => {
        if (utc) {
          return moment(sDateTime).utc().add(amount, unit).format(sFormat);
        }
        return moment(sDateTime).local().add(amount, unit).format(sFormat);
      },
}

export default Utils;