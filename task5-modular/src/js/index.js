import CsvParser from "./CsvParser.js";

let csv = '../sales.csv';
let salesCSV = new CsvParser(csv);

console.log(salesCSV._getCsv(csv));
