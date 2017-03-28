import CsvParser from "./CsvParser.js";

const csv = '../sales.csv';
const salesCSV = new CsvParser(csv);

console.log(salesCSV._getCsv(csv));
