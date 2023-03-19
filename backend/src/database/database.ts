import { Dialect, Sequelize } from "sequelize";

 export let connString = (process.env.NODE_ENV === 'production') ?
        `${(process.env.DB_DIALECT as Dialect) ?? 'postgres'}:${process.env.DB_USERNAME ??'MISSING_DB_USERNAME_CONFIG'}`+
        `:${process.env.DB_PASSWORD ??'MISSING_DB_PASSWORD_CONFIG'}@${process.env.DB_HOST ?? 'MISSING_DB_HOST_CONFIG'}`+
        `/${process.env.DB_NAME ??'MISSING_DB_NAME_CONFIG'}`
     : "sqlite::memory:";


export let cacheConnString = "sqlite::memory:";

console.log(`Connection String = ${connString}`);

export const cacheDb = new Sequelize(connString);

export interface City {
   id: string;
   city: string;
   country: string;
   lat: string;
   lon: string;
}

export const cities:City[] = [
   { id:'Kab6934', city: 'Kabul', country: 'Afghanistan', lat: '69.17233', lon: '34.52813'},
   { id:'Mar1960', city: 'Mariehamn', country: 'Aland Islands', lat: '19.93481', lon: '60.09726'},
   { id:'Tir1941', city: 'Tirana', country: 'Albania', lat: '19.81889', lon: '41.3275'},
   { id:'Alg336', city: 'Algiers', country: 'Algeria', lat: '3.08746', lon: '36.73225'},
   { id:'Pag-171-15', city: 'Pago Pago', country: 'American Samoa', lat: '-170.7025', lon: '-14.27806'},
   { id:'And142', city: 'Andorra la Vella', country: 'Andorra', lat: '1.52109', lon: '42.50779'},
   { id:'Lua13-9', city: 'Luanda', country: 'Angola', lat: '13.23432', lon: '-8.83682'},
   { id:'Sai-6217', city: 'Saint John\'s', country: 'Antigua and Barbuda', lat: '-61.84329', lon: '17.12096'},
   { id:'Bue-59-35', city: 'Buenos Aires', country: 'Argentina', lat: '-58.37723', lon: '-34.61315'},
   { id:'Cor-65-32', city: 'Cordoba', country: 'Argentina', lat: '-64.18105', lon: '-31.4135'},
   { id:'San-6718', city: 'San Juan', country: 'Argentina', lat: '-66.10572', lon: '18.46633'},
   { id:'Yer4440', city: 'Yerevan', country: 'Armenia', lat: '44.51361', lon: '40.18111'},
   { id:'Ora-7112', city: 'Oranjestad', country: 'Aruba', lat: '-70.02703', lon: '12.52398'},
   { id:'Bri153-28', city: 'Brisbane', country: 'Australia', lat: '153.02809', lon: '-27.46794'},
   { id:'Can149-36', city: 'Canberra', country: 'Australia', lat: '149.12807', lon: '-35.28346'},
   { id:'Mel144-38', city: 'Melbourne', country: 'Australia', lat: '144.96332', lon: '-37.814'},
   { id:'Per115-32', city: 'Perth', country: 'Australia', lat: '115.8614', lon: '-31.95224'},
   { id:'Syd151-34', city: 'Sydney', country: 'Australia', lat: '151.20732', lon: '-33.86785'},
   { id:'Vie1648', city: 'Vienna', country: 'Austria', lat: '16.37208', lon: '48.20849'},
   { id:'Bak4940', city: 'Baku', country: 'Azerbaijan', lat: '49.89201', lon: '40.37767'},
   { id:'Nas-7825', city: 'Nassau', country: 'Bahamas', lat: '-77.34306', lon: '25.05823'},
   { id:'Man5026', city: 'Manama', country: 'Bahrain', lat: '50.58565', lon: '26.22787'},
   { id:'Chi9122', city: 'Chittagong', country: 'Bangladesh', lat: '91.83168', lon: '22.3384'},
   { id:'Dha9023', city: 'Dhaka', country: 'Bangladesh', lat: '90.40744', lon: '23.7104'},
   { id:'Khu8922', city: 'Khulna', country: 'Bangladesh', lat: '89.56439', lon: '22.80979'},
   { id:'Bri-6013', city: 'Bridgetown', country: 'Barbados', lat: '-59.62021', lon: '13.10732'},
   { id:'Min2753', city: 'Minsk', country: 'Belarus', lat: '27.56667', lon: '53.9'},
   { id:'Bru450', city: 'Brussels', country: 'Belgium', lat: '4.34878', lon: '50.85045'},
   { id:'Bel-8917', city: 'Belmopan', country: 'Belize', lat: '-88.76667', lon: '17.25'},
   { id:'Por26', city: 'Porto-Novo', country: 'Benin', lat: '2.60359', lon: '6.49646'},
   { id:'Thi8927', city: 'Thimphu', country: 'Bhutan', lat: '89.64191', lon: '27.46609'},
   { id:'La-69-17', city: 'La Paz', country: 'Bolivia', lat: '-68.15', lon: '-16.5'},
   { id:'San-64-18', city: 'Santa Cruz de la Sierra', country: 'Bolivia', lat: '-63.18117', lon: '-17.78629'},
   { id:'Suc-66-20', city: 'Sucre', country: 'Bolivia', lat: '-65.26274', lon: '-19.03332'},
   { id:'Sar1843', city: 'Sarajevo', country: 'Bosnia and Herzegovina', lat: '18.35644', lon: '43.84864'},
   { id:'Gab25-25', city: 'Gaborone', country: 'Botswana', lat: '25.90859', lon: '-24.65451'},
   { id:'Bel-49-2', city: 'Belem', country: 'Brazil', lat: '-48.50444', lon: '-1.45583'},
   { id:'Bel-44-20', city: 'Belo Horizonte', country: 'Brazil', lat: '-43.93778', lon: '-19.92083'},
   { id:'Bra-48-16', city: 'Brasilia', country: 'Brazil', lat: '-47.92972', lon: '-15.77972'},
   { id:'Cur-50-26', city: 'Curitiba', country: 'Brazil', lat: '-49.27306', lon: '-25.42778'},
   { id:'For-39-4', city: 'Fortaleza', country: 'Brazil', lat: '-38.54306', lon: '-3.71722'},
   { id:'Man-61-4', city: 'Manaus', country: 'Brazil', lat: '-60.025', lon: '-3.10194'},
   { id:'Por-52-31', city: 'Porto Alegre', country: 'Brazil', lat: '-51.23019', lon: '-30.03283'},
   { id:'Rec-35-9', city: 'Recife', country: 'Brazil', lat: '-34.88111', lon: '-8.05389'},
   { id:'Rio-44-23', city: 'Rio de Janeiro', country: 'Brazil', lat: '-43.18223', lon: '-22.90642'},
   { id:'Sal-39-13', city: 'Salvador', country: 'Brazil', lat: '-38.51083', lon: '-12.97111'},
   { id:'Sao-47-24', city: 'Sao Paulo', country: 'Brazil', lat: '-46.63611', lon: '-23.5475'},
   { id:'Roa-6518', city: 'Road Town', country: 'British Virgin Islands', lat: '-64.62079', lon: '18.42693'},
   { id:'Ban1144', city: 'Bandar Seri Begawan', country: 'Brunei', lat: '114.94006', lon: '4.89035'},
   { id:'Sof2342', city: 'Sofia', country: 'Bulgaria', lat: '23.32415', lon: '42.69751'},
   { id:'Oua-212', city: 'Ouagadougou', country: 'Burkina Faso', lat: '-1.53388', lon: '12.36566'},
   { id:'Buj29-4', city: 'Bujumbura', country: 'Burundi', lat: '29.36142', lon: '-3.38193'},
   { id:'Git29-4', city: 'Gitega', country: 'Burundi', lat: '29.92463', lon: '-3.42708'},
   { id:'Pra-2414', city: 'Praia', country: 'Cabo Verde', lat: '-23.51254', lon: '14.93152'},
   { id:'Phn10411', city: 'Phnom Penh', country: 'Cambodia', lat: '104.91601', lon: '11.56245'},
   { id:'Dou94', city: 'Douala', country: 'Cameroon', lat: '9.70428', lon: '4.04827'},
   { id:'Yao113', city: 'Yaounde', country: 'Cameroon', lat: '11.51667', lon: '3.86667'},
   { id:'Mon-7445', city: 'Montreal', country: 'Canada', lat: '-73.58781', lon: '45.50884'},
   { id:'Ott-7645', city: 'Ottawa', country: 'Canada', lat: '-75.69812', lon: '45.41117'},
   { id:'Tor-8043', city: 'Toronto', country: 'Canada', lat: '-79.4163', lon: '43.70011'},
   { id:'Van-12449', city: 'Vancouver', country: 'Canada', lat: '-123.11934', lon: '49.24966'},
   { id:'Vic55-5', city: 'Victoria', country: 'Canada', lat: '55.45501', lon: '-4.62001'},
   { id:'Ban184', city: 'Bangui', country: 'Central African Republic', lat: '18.55496', lon: '4.36122'},
   { id:'ND1512', city: '\'N\'Djamena', country: 'Chad', lat: '15.0444', lon: '12.10672'},
   { id:'San-71-34', city: 'Santiago', country: 'Chile', lat: '-70.64827', lon: '-33.45694'},
   { id:'Bei11639', city: 'Beijing', country: 'China', lat: '116.39723', lon: '39.9075'},
   { id:'Che10430', city: 'Chengdu', country: 'China', lat: '104.06667', lon: '30.66667'},
   { id:'Cho10629', city: 'Chongqing', country: 'China', lat: '106.55278', lon: '29.56278'},
   { id:'Don11323', city: 'Dongguan', country: 'China', lat: '113.74866', lon: '23.01797'},
   { id:'Gua11323', city: 'Guangzhou', country: 'China', lat: '113.25', lon: '23.11667'},
   { id:'Nan10630', city: 'Nanchong', country: 'China', lat: '106.08473', lon: '30.79508'},
   { id:'Nan11832', city: 'Nanjing', country: 'China', lat: '118.77778', lon: '32.06167'},
   { id:'Sha12131', city: 'Shanghai', country: 'China', lat: '121.45806', lon: '31.22222'},
   { id:'She11422', city: 'Shenzhen', country: 'China', lat: '114.0683', lon: '22.54554'},
   { id:'Tia11739', city: 'Tianjin', country: 'China', lat: '117.17667', lon: '39.14222'},
   { id:'Wuh11430', city: 'Wuhan', country: 'China', lat: '114.26667', lon: '30.58333'},
   { id:'Xi10834', city: 'Xi\'an', country: 'China', lat: '108.92861', lon: '34.25833'},
   { id:'Bar-7510', city: 'Barranquilla', country: 'Colombia', lat: '-74.78132', lon: '10.96854'},
   { id:'Bog-754', city: 'Bogota', country: 'Colombia', lat: '-74.08175', lon: '4.60971'},
   { id:'Cal-773', city: 'Cali', country: 'Colombia', lat: '-76.5225', lon: '3.43722'},
   { id:'Med-766', city: 'Medellin', country: 'Colombia', lat: '-75.56359', lon: '6.25184'},
   { id:'Mor43-12', city: 'Moroni', country: 'Comoros', lat: '43.25506', lon: '-11.70216'},
   { id:'Ava-160-22', city: 'Avarua', country: 'Cook Islands', lat: '-159.77545', lon: '-21.2075'},
   { id:'Zag1545', city: 'Zagreb', country: 'Croatia', lat: '15.97798', lon: '45.81444'},
   { id:'Hav-8323', city: 'Havana', country: 'Cuba', lat: '-82.38304', lon: '23.13302'},
   { id:'Wil-6912', city: 'Willemstad', country: 'Curacao', lat: '-68.93354', lon: '12.1084'},
   { id:'Nic3335', city: 'Nicosia', country: 'Cyprus', lat: '33.3642', lon: '35.17531'},
   { id:'Pra1450', city: 'Prague', country: 'Czechia', lat: '14.42076', lon: '50.08804'},
   { id:'Kin15-5', city: 'Kinshasa', country: 'Democratic Republic of the Congo', lat: '15.31357', lon: '-4.32758'},
   { id:'Lub27-12', city: 'Lubumbashi', country: 'Democratic Republic of the Congo', lat: '27.47938', lon: '-11.66089'},
   { id:'Cop1255', city: 'Copenhagen', country: 'Denmark', lat: '12.56553', lon: '55.67594'},
   { id:'Dji4311', city: 'Djibouti', country: 'Djibouti', lat: '43.14503', lon: '11.58901'},
   { id:'Ros-6215', city: 'Roseau', country: 'Dominica', lat: '-61.38808', lon: '15.30174'},
   { id:'San-7018', city: 'Santo Domingo', country: 'Dominican Republic', lat: '-69.89232', lon: '18.47186'},
   { id:'Gua-80-3', city: 'Guayaquil', country: 'Ecuador', lat: '-79.88621', lon: '-2.19616'},
   { id:'Qui-79-1', city: 'Quito', country: 'Ecuador', lat: '-78.52495', lon: '-0.22985'},
   { id:'Ale2931', city: 'Alexandria', country: 'Egypt', lat: '29.91582', lon: '31.20176'},
   { id:'Cai3130', city: 'Cairo', country: 'Egypt', lat: '31.24967', lon: '30.06263'},
   { id:'Giz3130', city: 'Giza', country: 'Egypt', lat: '31.20861', lon: '30.00944'},
   { id:'San-9013', city: 'San Salvador', country: 'El Salvador', lat: '-89.18718', lon: '13.68935'},
   { id:'Mal83', city: 'Malabo', country: 'Equatorial Guinea', lat: '8.78166', lon: '3.75578'},
   { id:'Asm3815', city: 'Asmara', country: 'Eritrea', lat: '38.93184', lon: '15.33805'},
   { id:'Tal2459', city: 'Tallinn', country: 'Estonia', lat: '24.75353', lon: '59.43696'},
   { id:'Mba31-27', city: 'Mbabane', country: 'Eswatini', lat: '31.13333', lon: '-26.31667'},
   { id:'Add389', city: 'Addis Ababa', country: 'Ethiopia', lat: '38.74689', lon: '9.02497'},
   { id:'Tor-762', city: 'Torshavn', country: 'Faroe Islands', lat: '-6.77164', lon: '62.00973'},
   { id:'Suv178-19', city: 'Suva', country: 'Fiji', lat: '178.44149', lon: '-18.14161'},
   { id:'Hel2460', city: 'Helsinki', country: 'Finland', lat: '24.93545', lon: '60.16952'},
   { id:'Par248', city: 'Paris', country: 'France', lat: '2.3488', lon: '48.85341'},
   { id:'Cay-534', city: 'Cayenne', country: 'French Guiana', lat: '-52.33333', lon: '4.93333'},
   { id:'Pap-150-18', city: 'Papeete', country: 'French Polynesia', lat: '-149.5665', lon: '-17.53733'},
   { id:'Lib90', city: 'Libreville', country: 'Gabon', lat: '9.45356', lon: '0.39241'},
   { id:'Ban-1713', city: 'Banjul', country: 'Gambia', lat: '-16.57803', lon: '13.45274'},
   { id:'Tbi4441', city: 'Tbilisi', country: 'Georgia', lat: '44.83368', lon: '41.69411'},
   { id:'Ber1352', city: 'Berlin', country: 'Germany', lat: '13.41053', lon: '52.52437'},
   { id:'Ham953', city: 'Hamburg', country: 'Germany', lat: '9.99302', lon: '53.55073'},
   { id:'Acc-15', city: 'Accra', country: 'Ghana', lat: '-0.1969', lon: '5.55602'},
   { id:'Kum-26', city: 'Kumasi', country: 'Ghana', lat: '-1.62443', lon: '6.68848'},
   { id:'Gib-636', city: 'Gibraltar', country: 'Gibraltar', lat: '-5.35257', lon: '36.14474'},
   { id:'Ath2337', city: 'Athens', country: 'Greece', lat: '23.72784', lon: '37.98376'},
   { id:'Nuu-5264', city: 'Nuuk', country: 'Greenland', lat: '-51.72157', lon: '64.18347'},
   { id:'Sai-6212', city: 'Saint George\'s', country: 'Grenada', lat: '-61.75226', lon: '12.05288'},
   { id:'Bas-6215', city: 'Basse-Terre', country: 'Guadeloupe', lat: '-61.73214', lon: '15.99714'},
   { id:'Gua-9114', city: 'Guatemala City', country: 'Guatemala', lat: '-90.51327', lon: '14.64072'},
   { id:'Sai-349', city: 'Saint Peter Port', country: 'Guernsey', lat: '-2.53527', lon: '49.45981'},
   { id:'Cam-149', city: 'Camayenne', country: 'Guinea', lat: '-13.68778', lon: '9.535'},
   { id:'Con-149', city: 'Conakry', country: 'Guinea', lat: '-13.67729', lon: '9.53795'},
   { id:'Bis-1611', city: 'Bissau', country: 'Guinea-Bissau', lat: '-15.59767', lon: '11.86357'},
   { id:'Geo-596', city: 'Georgetown', country: 'Guyana', lat: '-58.15527', lon: '6.80448'},
   { id:'Por-7318', city: 'Port-au-Prince', country: 'Haiti', lat: '-72.33881', lon: '18.54349'},
   { id:'Teg-8814', city: 'Tegucigalpa', country: 'Honduras', lat: '-87.20681', lon: '14.0818'},
   { id:'Hon11422', city: 'Hong Kong', country: 'Hong Kong', lat: '114.17469', lon: '22.27832'},
   { id:'Kow11422', city: 'Kowloon', country: 'Hong Kong', lat: '114.18333', lon: '22.31667'},
   { id:'Bud1947', city: 'Budapest', country: 'Hungary', lat: '19.04045', lon: '47.49835'},
   { id:'Rey-2264', city: 'Reykjavik', country: 'Iceland', lat: '-21.89541', lon: '64.13548'},
   { id:'Ahm7223', city: 'Ahmedabad', country: 'India', lat: '72.58727', lon: '23.02579'},
   { id:'Ben7712', city: 'Bengaluru', country: 'India', lat: '77.59369', lon: '12.97194'},
   { id:'Che8013', city: 'Chennai', country: 'India', lat: '80.27847', lon: '13.08784'},
   { id:'Del7728', city: 'Delhi', country: 'India', lat: '77.23149', lon: '28.65195'},
   { id:'Hyd7817', city: 'Hyderabad', country: 'India', lat: '78.45636', lon: '17.38405'},
   { id:'Jai7526', city: 'Jaipur', country: 'India', lat: '75.78781', lon: '26.91962'},
   { id:'Kan8026', city: 'Kanpur', country: 'India', lat: '80.34975', lon: '26.46523'},
   { id:'Kol8822', city: 'Kolkata', country: 'India', lat: '88.36304', lon: '22.56263'},
   { id:'Mum7219', city: 'Mumbai', country: 'India', lat: '72.88261', lon: '19.07283'},
   { id:'Pun7318', city: 'Pune', country: 'India', lat: '73.85535', lon: '18.51957'},
   { id:'Sur7221', city: 'Surat', country: 'India', lat: '72.83023', lon: '21.19594'},
   { id:'Ban955', city: 'Banda Aceh', country: 'Indonesia', lat: '95.33333', lon: '5.54167'},
   { id:'Ban107-7', city: 'Bandung', country: 'Indonesia', lat: '107.60694', lon: '-6.92222'},
   { id:'Bek106-7', city: 'Bekasi', country: 'Indonesia', lat: '106.9896', lon: '-6.2349'},
   { id:'Jak106-7', city: 'Jakarta', country: 'Indonesia', lat: '106.84513', lon: '-6.21462'},
   { id:'Mak119-6', city: 'Makassar', country: 'Indonesia', lat: '119.43194', lon: '-5.14861'},
   { id:'Med983', city: 'Medan', country: 'Indonesia', lat: '98.66667', lon: '3.58333'},
   { id:'Pal104-3', city: 'Palembang', country: 'Indonesia', lat: '104.7458', lon: '-2.91673'},
   { id:'Sem110-7', city: 'Semarang', country: 'Indonesia', lat: '110.42083', lon: '-6.99306'},
   { id:'Sou106-7', city: 'South Tangerang', country: 'Indonesia', lat: '106.71789', lon: '-6.28862'},
   { id:'Sur112-8', city: 'Surabaya', country: 'Indonesia', lat: '112.75083', lon: '-7.24917'},
   { id:'Tan106-7', city: 'Tangerang', country: 'Indonesia', lat: '106.63', lon: '-6.17806'},
   { id:'Isf5132', city: 'Isfahan', country: 'Iran', lat: '51.67462', lon: '32.65246'},
   { id:'Kar5035', city: 'Karaj', country: 'Iran', lat: '50.99155', lon: '35.83266'},
   { id:'Mas5936', city: 'Mashhad', country: 'Iran', lat: '59.56796', lon: '36.31559'},
   { id:'Tab4638', city: 'Tabriz', country: 'Iran', lat: '46.2919', lon: '38.08'},
   { id:'Teh5135', city: 'Tehran', country: 'Iran', lat: '51.42151', lon: '35.69439'},
   { id:'Bag4433', city: 'Baghdad', country: 'Iraq', lat: '44.40088', lon: '33.34058'},
   { id:'Bas4730', city: 'Basrah', country: 'Iraq', lat: '47.7804', lon: '30.50852'},
   { id:'Mos4336', city: 'Mosul', country: 'Iraq', lat: '43.11889', lon: '36.335'},
   { id:'Dub-753', city: 'Dublin', country: 'Ireland', lat: '-6.24889', lon: '53.33306'},
   { id:'Dou-554', city: 'Douglas', country: 'Isle of Man', lat: '-4.48333', lon: '54.15'},
   { id:'Jer3531', city: 'Jerusalem', country: 'Israel', lat: '35.21633', lon: '31.76904'},
   { id:'Tel3432', city: 'Tel Aviv', country: 'Israel', lat: '34.78057', lon: '32.08088'},
   { id:'Rom1241', city: 'Rome', country: 'Italy', lat: '12.51133', lon: '41.89193'},
   { id:'Abi-55', city: 'Abidjan', country: 'Ivory Coast', lat: '-4.00167', lon: '5.35444'},
   { id:'Yam-66', city: 'Yamoussoukro', country: 'Ivory Coast', lat: '-5.27674', lon: '6.82055'},
   { id:'Kin-7717', city: 'Kingston', country: 'Jamaica', lat: '-76.79358', lon: '17.99702'},
   { id:'Fuk13033', city: 'Fukuoka', country: 'Japan', lat: '130.41667', lon: '33.6'},
   { id:'Kaw13935', city: 'Kawasaki', country: 'Japan', lat: '139.71722', lon: '35.52056'},
   { id:'Kob13534', city: 'Kobe', country: 'Japan', lat: '135.183', lon: '34.6913'},
   { id:'Kyo13535', city: 'Kyoto', country: 'Japan', lat: '135.75385', lon: '35.02107'},
   { id:'Nag13635', city: 'Nagoya', country: 'Japan', lat: '136.90641', lon: '35.18147'},
   { id:'Osa13534', city: 'Osaka', country: 'Japan', lat: '135.50218', lon: '34.69374'},
   { id:'Sap14143', city: 'Sapporo', country: 'Japan', lat: '141.35', lon: '43.06667'},
   { id:'Tok13935', city: 'Tokyo', country: 'Japan', lat: '139.69171', lon: '35.6895'},
   { id:'Yok13935', city: 'Yokohama', country: 'Japan', lat: '139.65', lon: '35.43333'},
   { id:'Sai-349', city: 'Saint Helier', country: 'Jersey', lat: '-2.10491', lon: '49.18804'},
   { id:'Amm3531', city: 'Amman', country: 'Jordan', lat: '35.94503', lon: '31.95522'},
   { id:'Alm7643', city: 'Almaty', country: 'Kazakhstan', lat: '76.92861', lon: '43.25667'},
   { id:'Nur7151', city: 'Nur-Sultan', country: 'Kazakhstan', lat: '71.44598', lon: '51.1801'},
   { id:'Nai36-2', city: 'Nairobi', country: 'Kenya', lat: '36.81667', lon: '-1.28333'},
   { id:'Tar1721', city: 'Tarawa', country: 'Kiribati', lat: '172.97696', lon: '1.3278'},
   { id:'Pri2142', city: 'Pristina', country: 'Kosovo', lat: '21.16688', lon: '42.67272'},
   { id:'Kuw4729', city: 'Kuwait', country: 'Kuwait', lat: '47.97833', lon: '29.36972'},
   { id:'Bis7442', city: 'Bishkek', country: 'Kyrgyzstan', lat: '74.59', lon: '42.87'},
   { id:'Vie10217', city: 'Vientiane', country: 'Laos', lat: '102.6', lon: '17.96667'},
   { id:'Rig2456', city: 'Riga', country: 'Latvia', lat: '24.10589', lon: '56.946'},
   { id:'Bei3533', city: 'Beirut', country: 'Lebanon', lat: '35.50157', lon: '33.89332'},
   { id:'Mas27-30', city: 'Maseru', country: 'Lesotho', lat: '27.48333', lon: '-29.31667'},
   { id:'Mon-116', city: 'Monrovia', country: 'Liberia', lat: '-10.7969', lon: '6.30054'},
   { id:'Tri1332', city: 'Tripoli', country: 'Libya', lat: '13.18733', lon: '32.88743'},
   { id:'Vad947', city: 'Vaduz', country: 'Liechtenstein', lat: '9.52154', lon: '47.14151'},
   { id:'Vil2554', city: 'Vilnius', country: 'Lithuania', lat: '25.2798', lon: '54.68916'},
   { id:'Lux649', city: 'Luxembourg', country: 'Luxembourg', lat: '6.13', lon: '49.61167'},
   { id:'Mac11322', city: 'Macau', country: 'Macao', lat: '113.54611', lon: '22.20056'},
   { id:'Ant47-19', city: 'Antananarivo', country: 'Madagascar', lat: '47.53613', lon: '-18.91368'},
   { id:'Lil33-14', city: 'Lilongwe', country: 'Malawi', lat: '33.78725', lon: '-13.96692'},
   { id:'Geo-8219', city: 'George Town', country: 'Malaysia', lat: '-81.37436', lon: '19.2866'},
   { id:'Kot1026', city: 'Kota Bharu', country: 'Malaysia', lat: '102.24333', lon: '6.12361'},
   { id:'Kua1013', city: 'Kuala Lumpur', country: 'Malaysia', lat: '101.68653', lon: '3.1412'},
   { id:'Mal734', city: 'Male', country: 'Maldives', lat: '73.50916', lon: '4.17521'},
   { id:'Bam-812', city: 'Bamako', country: 'Mali', lat: '-8', lon: '12.65'},
   { id:'Val1435', city: 'Valletta', country: 'Malta', lat: '14.5148', lon: '35.89968'},
   { id:'Maj1717', city: 'Majuro', country: 'Marshall Islands', lat: '171.38027', lon: '7.08971'},
   { id:'For-6214', city: 'Fort-de-France', country: 'Martinique', lat: '-61.07418', lon: '14.60365'},
   { id:'Nou-1618', city: 'Nouakchott', country: 'Mauritania', lat: '-15.9785', lon: '18.08581'},
   { id:'Por57-21', city: 'Port Louis', country: 'Mauritius', lat: '57.49889', lon: '-20.16194'},
   { id:'Mam45-13', city: 'Mamoudzou', country: 'Mayotte', lat: '45.22878', lon: '-12.78234'},
   { id:'Gua-10420', city: 'Guadalajara', country: 'Mexico', lat: '-103.39182', lon: '20.66682'},
   { id:'Jua-10731', city: 'Juarez', country: 'Mexico', lat: '-106.46084', lon: '31.72024'},
   { id:'Mex-10019', city: 'Mexico City', country: 'Mexico', lat: '-99.12766', lon: '19.42847'},
   { id:'Pue-9919', city: 'Puebla', country: 'Mexico', lat: '-98.20346', lon: '19.03793'},
   { id:'Tij-11832', city: 'Tijuana', country: 'Mexico', lat: '-117.00371', lon: '32.5027'},
   { id:'Chi2847', city: 'Chisinau', country: 'Moldova', lat: '28.8575', lon: '47.00556'},
   { id:'Mon743', city: 'Monaco', country: 'Monaco', lat: '7.41667', lon: '43.73333'},
   { id:'Ula10647', city: 'Ulan Bator', country: 'Mongolia', lat: '106.88324', lon: '47.90771'},
   { id:'Pod1942', city: 'Podgorica', country: 'Montenegro', lat: '19.26361', lon: '42.44111'},
   { id:'Cas-833', city: 'Casablanca', country: 'Morocco', lat: '-7.61138', lon: '33.58831'},
   { id:'Rab-734', city: 'Rabat', country: 'Morocco', lat: '-6.83255', lon: '34.01325'},
   { id:'Map32-26', city: 'Maputo', country: 'Mozambique', lat: '32.58322', lon: '-25.96553'},
   { id:'Nay9619', city: 'Nay Pyi Taw', country: 'Myanmar', lat: '96.12972', lon: '19.745'},
   { id:'Yan9616', city: 'Yangon', country: 'Myanmar', lat: '96.15611', lon: '16.80528'},
   { id:'Win17-23', city: 'Windhoek', country: 'Namibia', lat: '17.08323', lon: '-22.55941'},
   { id:'Kat8527', city: 'Kathmandu', country: 'Nepal', lat: '85.3206', lon: '27.70169'},
   { id:'Ams452', city: 'Amsterdam', country: 'Netherlands', lat: '4.88969', lon: '52.37403'},
   { id:'Nou166-23', city: 'Noumea', country: 'New Caledonia', lat: '166.44884', lon: '-22.27407'},
   { id:'Auc174-37', city: 'Auckland', country: 'New Zealand', lat: '174.76349', lon: '-36.84853'},
   { id:'Wel174-42', city: 'Wellington', country: 'New Zealand', lat: '174.77557', lon: '-41.28664'},
   { id:'Man-8712', city: 'Managua', country: 'Nicaragua', lat: '-86.2504', lon: '12.13282'},
   { id:'Nia213', city: 'Niamey', country: 'Niger', lat: '2.1098', lon: '13.51366'},
   { id:'Abu79', city: 'Abuja', country: 'Nigeria', lat: '7.49508', lon: '9.05785'},
   { id:'Iba37', city: 'Ibadan', country: 'Nigeria', lat: '3.90591', lon: '7.37756'},
   { id:'Kad710', city: 'Kaduna', country: 'Nigeria', lat: '7.43879', lon: '10.52641'},
   { id:'Kan812', city: 'Kano', country: 'Nigeria', lat: '8.51672', lon: '12.00012'},
   { id:'Lag36', city: 'Lagos', country: 'Nigeria', lat: '3.39467', lon: '6.45407'},
   { id:'Pyo12539', city: 'Pyongyang', country: 'North Korea', lat: '125.75432', lon: '39.03385'},
   { id:'Sko2141', city: 'Skopje', country: 'North Macedonia', lat: '21.43141', lon: '41.99646'},
   { id:'Sai14515', city: 'Saipan', country: 'Northern Mariana Islands', lat: '145.7545', lon: '15.21233'},
   { id:'Osl1059', city: 'Oslo', country: 'Norway', lat: '10.74609', lon: '59.91273'},
   { id:'Mus5823', city: 'Muscat', country: 'Oman', lat: '58.40778', lon: '23.58413'},
   { id:'Fai7331', city: 'Faisalabad', country: 'Pakistan', lat: '73.08969', lon: '31.41554'},
   { id:'Guj7432', city: 'Gujranwala', country: 'Pakistan', lat: '74.18705', lon: '32.15567'},
   { id:'Hyd6825', city: 'Hyderabad', country: 'Pakistan', lat: '68.37366', lon: '25.39242'},
   { id:'Isl7333', city: 'Islamabad', country: 'Pakistan', lat: '73.04329', lon: '33.72148'},
   { id:'Kar6724', city: 'Karachi', country: 'Pakistan', lat: '67.0104', lon: '24.8608'},
   { id:'Lah7431', city: 'Lahore', country: 'Pakistan', lat: '74.35071', lon: '31.558'},
   { id:'Mul7130', city: 'Multan', country: 'Pakistan', lat: '71.47824', lon: '30.19679'},
   { id:'Raw7333', city: 'Rawalpindi', country: 'Pakistan', lat: '73.0479', lon: '33.59733'},
   { id:'Pan-808', city: 'Panama', country: 'Panama', lat: '-79.51973', lon: '8.9936'},
   { id:'Por147-10', city: 'Port Moresby', country: 'Papua New Guinea', lat: '147.15089', lon: '-9.47723'},
   { id:'Asu-58-26', city: 'Asuncion', country: 'Paraguay', lat: '-57.647', lon: '-25.28646'},
   { id:'Lim-78-13', city: 'Lima', country: 'Peru', lat: '-77.02824', lon: '-12.04318'},
   { id:'Cal12014', city: 'Caloocan', country: 'Philippines', lat: '120.96788', lon: '14.64953'},
   { id:'Man12014', city: 'Manila', country: 'Philippines', lat: '120.9822', lon: '14.6042'},
   { id:'Que12114', city: 'Quezon City', country: 'Philippines', lat: '121.0509', lon: '14.6488'},
   { id:'War2152', city: 'Warsaw', country: 'Poland', lat: '21.01178', lon: '52.22977'},
   { id:'Lis-1038', city: 'Lisbon', country: 'Portugal', lat: '-9.13333', lon: '38.71667'},
   { id:'Doh5125', city: 'Doha', country: 'Qatar', lat: '51.53096', lon: '25.28545'},
   { id:'Bra15-5', city: 'Brazzaville', country: 'Republic of the Congo', lat: '15.28318', lon: '-4.26613'},
   { id:'Sai55-21', city: 'Saint-Denis', country: 'Reunion', lat: '55.4504', lon: '-20.88231'},
   { id:'Sai-5746', city: 'Saint-Pierre', country: 'Reunion', lat: '-56.1773', lon: '46.77914'},
   { id:'Buc2644', city: 'Bucharest', country: 'Romania', lat: '26.10626', lon: '44.43225'},
   { id:'Mos3755', city: 'Moscow', country: 'Russia', lat: '37.61556', lon: '55.75222'},
   { id:'Nov8255', city: 'Novosibirsk', country: 'Russia', lat: '82.9346', lon: '55.0415'},
   { id:'Sai3059', city: 'Saint Petersburg', country: 'Russia', lat: '30.31413', lon: '59.93863'},
   { id:'Yek6056', city: 'Yekaterinburg', country: 'Russia', lat: '60.6122', lon: '56.8519'},
   { id:'Kig30-2', city: 'Kigali', country: 'Rwanda', lat: '30.05885', lon: '-1.94995'},
   { id:'Gus-6317', city: 'Gustavia', country: 'Saint Barthelemy', lat: '-62.84978', lon: '17.89618'},
   { id:'Bas-6317', city: 'Basseterre', country: 'Saint Kitts and Nevis', lat: '-62.72499', lon: '17.2955'},
   { id:'Cas-6213', city: 'Castries', country: 'Saint Lucia', lat: '-61.00614', lon: '13.9957'},
   { id:'Mar-6418', city: 'Marigot', country: 'Saint Martin', lat: '-63.08302', lon: '18.06819'},
   { id:'Kin-6213', city: 'Kingstown', country: 'Saint Vincent and the Grenadines', lat: '-61.22742', lon: '13.15527'},
   { id:'Api-172-14', city: 'Apia', country: 'Samoa', lat: '-171.76666', lon: '-13.83333'},
   { id:'Sao60', city: 'Sao Tome', country: 'Sao Tome and Principe', lat: '6.72732', lon: '0.33654'},
   { id:'Jed3921', city: 'Jeddah', country: 'Saudi Arabia', lat: '39.18624', lon: '21.49012'},
   { id:'Mec3921', city: 'Mecca', country: 'Saudi Arabia', lat: '39.82563', lon: '21.42664'},
   { id:'Med3924', city: 'Medina', country: 'Saudi Arabia', lat: '39.61417', lon: '24.46861'},
   { id:'Riy4624', city: 'Riyadh', country: 'Saudi Arabia', lat: '46.72185', lon: '24.68773'},
   { id:'Dak-1814', city: 'Dakar', country: 'Senegal', lat: '-17.44406', lon: '14.6937'},
   { id:'Bel2044', city: 'Belgrade', country: 'Serbia', lat: '20.46513', lon: '44.80401'},
   { id:'Fre-148', city: 'Freetown', country: 'Sierra Leone', lat: '-13.2356', lon: '8.48714'},
   { id:'Sin1031', city: 'Singapore', country: 'Singapore', lat: '103.85007', lon: '1.28967'},
   { id:'Bra1748', city: 'Bratislava', country: 'Slovakia', lat: '17.10674', lon: '48.14816'},
   { id:'Lju1446', city: 'Ljubljana', country: 'Slovenia', lat: '14.50513', lon: '46.05108'},
   { id:'Hon159-10', city: 'Honiara', country: 'Solomon Islands', lat: '159.95', lon: '-9.43333'},
   { id:'Mog452', city: 'Mogadishu', country: 'Somalia', lat: '45.34375', lon: '2.03711'},
   { id:'Cap18-34', city: 'Cape Town', country: 'South Africa', lat: '18.42322', lon: '-33.92584'},
   { id:'Dur31-30', city: 'Durban', country: 'South Africa', lat: '31.0292', lon: '-29.8579'},
   { id:'Joh28-27', city: 'Johannesburg', country: 'South Africa', lat: '28.04363', lon: '-26.20227'},
   { id:'Pre28-26', city: 'Pretoria', country: 'South Africa', lat: '28.18783', lon: '-25.74486'},
   { id:'Sow27-27', city: 'Soweto', country: 'South Africa', lat: '27.85849', lon: '-26.26781'},
   { id:'Bus12935', city: 'Busan', country: 'South Korea', lat: '129.03004', lon: '35.10168'},
   { id:'Dae12835', city: 'Daegu', country: 'South Korea', lat: '128.59111', lon: '35.87028'},
   { id:'Dae12736', city: 'Daejeon', country: 'South Korea', lat: '127.38493', lon: '36.34913'},
   { id:'Gwa12635', city: 'Gwangju', country: 'South Korea', lat: '126.91556', lon: '35.15472'},
   { id:'Inc12637', city: 'Incheon', country: 'South Korea', lat: '126.70515', lon: '37.45646'},
   { id:'Seo12637', city: 'Seoul', country: 'South Korea', lat: '126.9784', lon: '37.566'},
   { id:'Jub314', city: 'Juba', country: 'South Sudan', lat: '31.58247', lon: '4.85165'},
   { id:'Bar241', city: 'Barcelona', country: 'Spain', lat: '2.15899', lon: '41.38879'},
   { id:'Mad-440', city: 'Madrid', country: 'Spain', lat: '-3.70256', lon: '40.4165'},
   { id:'Col796', city: 'Colombo', country: 'Sri Lanka', lat: '79.84868', lon: '6.93548'},
   { id:'Kha3215', city: 'Khartoum', country: 'Sudan', lat: '32.53241', lon: '15.55177'},
   { id:'Par-565', city: 'Paramaribo', country: 'Suriname', lat: '-55.16682', lon: '5.86638'},
   { id:'Sto1859', city: 'Stockholm', country: 'Sweden', lat: '18.06871', lon: '59.32938'},
   { id:'Ber746', city: 'Bern', country: 'Switzerland', lat: '7.44744', lon: '46.94809'},
   { id:'Ale3736', city: 'Aleppo', country: 'Syria', lat: '37.16117', lon: '36.20124'},
   { id:'Dam3633', city: 'Damascus', country: 'Syria', lat: '36.29128', lon: '33.5102'},
   { id:'Kao12022', city: 'Kaohsiung', country: 'Taiwan', lat: '120.31333', lon: '22.61626'},
   { id:'Tai12125', city: 'Taipei', country: 'Taiwan', lat: '121.53185', lon: '25.04776'},
   { id:'Dus6838', city: 'Dushanbe', country: 'Tajikistan', lat: '68.77905', lon: '38.53575'},
   { id:'Dar39-7', city: 'Dar es Salaam', country: 'Tanzania', lat: '39.26951', lon: '-6.82349'},
   { id:'Dod35-7', city: 'Dodoma', country: 'Tanzania', lat: '35.73947', lon: '-6.17221'},
   { id:'Ban10013', city: 'Bangkok', country: 'Thailand', lat: '100.50144', lon: '13.75398'},
   { id:'Dil125-9', city: 'Dili', country: 'Timor Leste', lat: '125.57361', lon: '-8.55861'},
   { id:'Lom16', city: 'Lome', country: 'Togo', lat: '1.22154', lon: '6.12874'},
   { id:'Nuk-176-22', city: 'Nuku\'alofa', country: 'Tonga', lat: '-175.2018', lon: '-21.13938'},
   { id:'Por-6210', city: 'Port of Spain', country: 'Trinidad and Tobago', lat: '-61.51889', lon: '10.66668'},
   { id:'Tun1036', city: 'Tunis', country: 'Tunisia', lat: '10.16579', lon: '36.81897'},
   { id:'Ank3239', city: 'Ankara', country: 'Turkey', lat: '32.85427', lon: '39.91987'},
   { id:'Bur2940', city: 'Bursa', country: 'Turkey', lat: '29.06013', lon: '40.19559'},
   { id:'Ist2841', city: 'Istanbul', country: 'Turkey', lat: '28.94966', lon: '41.01384'},
   { id:'Izm2738', city: 'Izmir', country: 'Turkey', lat: '27.13838', lon: '38.41273'},
   { id:'Ash5837', city: 'Ashgabat', country: 'Turkmenistan', lat: '58.38333', lon: '37.95'},
   { id:'Fun179-9', city: 'Funafuti', country: 'Tuvalu', lat: '179.19417', lon: '-8.52425'},
   { id:'Cha-6518', city: 'Charlotte Amalie', country: 'U.S. Virgin Islands', lat: '-64.9307', lon: '18.3419'},
   { id:'Kam320', city: 'Kampala', country: 'Uganda', lat: '32.58219', lon: '0.31628'},
   { id:'Kha3649', city: 'Kharkiv', country: 'Ukraine', lat: '36.25272', lon: '49.98081'},
   { id:'Kyi3050', city: 'Kyiv', country: 'Ukraine', lat: '30.5238', lon: '50.45466'},
   { id:'Abu5424', city: 'Abu Dhabi', country: 'United Arab Emirates', lat: '54.39696', lon: '24.45118'},
   { id:'Dub5525', city: 'Dubai', country: 'United Arab Emirates', lat: '55.30927', lon: '25.07725'},
   { id:'Sha5525', city: 'Sharjah', country: 'United Arab Emirates', lat: '55.41206', lon: '25.33737'},
   { id:'Lon-151', city: 'London', country: 'United Kingdom', lat: '-0.12574', lon: '51.50853'},
   { id:'Anc-15061', city: 'Anchorage', country: 'United States', lat: '-149.90028', lon: '61.21806'},
   { id:'Arn-12138', city: 'Arnold', country: 'United States', lat: '-120.351935', lon: '38.255366'},
   { id:'Chi-8841', city: 'Chicago', country: 'United States', lat: '-87.65005', lon: '41.85003'},
   { id:'Dal-9732', city: 'Dallas', country: 'United States', lat: '-96.80667', lon: '32.78306'},
   { id:'Den-10539', city: 'Denver', country: 'United States', lat: '-104.9847', lon: '39.73915'},
   { id:'Hon-15821', city: 'Honolulu', country: 'United States', lat: '-157.85833', lon: '21.30694'},
   { id:'Hou-9629', city: 'Houston', country: 'United States', lat: '-95.36327', lon: '29.76328'},
   { id:'Kin-12036', city: 'Kingsburg', country: 'United States', lat: '-119.554', lon: '36.5138'},
   { id:'Los-11934', city: 'Los Angeles', country: 'United States', lat: '-118.24368', lon: '34.05223'},
   { id:'Mia-8125', city: 'Miami', country: 'United States', lat: '-80.19366', lon: '25.77427'},
   { id:'New-7540', city: 'New York', country: 'United States', lat: '-74.00597', lon: '40.71427'},
   { id:'Pal-12337', city: 'Palo Alto', country: 'United States', lat: '-122.14302', lon: '37.44188'},
   { id:'Phi-7639', city: 'Philadelphia', country: 'United States', lat: '-75.16379', lon: '39.95233'},
   { id:'Pho-11333', city: 'Phoenix', country: 'United States', lat: '-112.07404', lon: '33.44838'},
   { id:'San-9929', city: 'San Antonio', country: 'United States', lat: '-98.49363', lon: '29.42412'},
   { id:'San-11832', city: 'San Diego', country: 'United States', lat: '-117.16472', lon: '32.71571'},
   { id:'San-12337', city: 'San Francisco', country: 'United States', lat: '-122.41942', lon: '37.77493'},
   { id:'San-859', city: 'San Jose', country: 'United States', lat: '-84.08333', lon: '9.93333'},
   { id:'San1243', city: 'San Marino', country: 'United States', lat: '12.44639', lon: '43.93667'},
   { id:'Sea-12347', city: 'Seattle', country: 'United States', lat: '-122.33207', lon: '47.60621'},
   { id:'Was-7838', city: 'Washington', country: 'United States', lat: '-77.03637', lon: '38.89511'},
   { id:'Mon-57-35', city: 'Montevideo', country: 'Uruguay', lat: '-56.18816', lon: '-34.90328'},
   { id:'Tas6941', city: 'Tashkent', country: 'Uzbekistan', lat: '69.21627', lon: '41.26465'},
   { id:'Por168-18', city: 'Port-Vila', country: 'Vanuatu', lat: '168.31366', lon: '-17.73648'},
   { id:'Car-6710', city: 'Caracas', country: 'Venezuela', lat: '-66.87919', lon: '10.48801'},
   { id:'Mar-7210', city: 'Maracaibo', country: 'Venezuela', lat: '-71.61245', lon: '10.66663'},
   { id:'Mar-6810', city: 'Maracay', country: 'Venezuela', lat: '-67.59113', lon: '10.23535'},
   { id:'Val-6910', city: 'Valencia', country: 'Venezuela', lat: '-68.00765', lon: '10.16202'},
   { id:'Han10521', city: 'Hanoi', country: 'Vietnam', lat: '105.84117', lon: '21.0245'},
   { id:'Ho10610', city: 'Ho Chi Minh City', country: 'Vietnam', lat: '106.62965', lon: '10.82302'},
   { id:'San4415', city: 'Sanaa', country: 'Yemen', lat: '44.20667', lon: '15.35472'},
   { id:'Lus28-16', city: 'Lusaka', country: 'Zambia', lat: '28.28713', lon: '-15.40669'},
   { id:'Har31-18', city: 'Harare', country: 'Zimbabwe', lat: '31.05337', lon: '-17.82772'},
 ];