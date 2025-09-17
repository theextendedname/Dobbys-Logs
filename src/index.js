new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "3", "12", "10"],
["theextendedname.4879", "5", "5", "15", "13"],
["Batercus.6257", "4", "1", "10", "3"],
["Bloop.2831", "4", "4", "12", "12"],
["virtual.3879", "1", "0", "1", "0"],
["Soushi.5132", "3", "0", "9", "0"],
["Berticus.8167", "1", "1", "1", "1"],
["Talcos.9723", "0", "0", "3", "2"],
["Gambit.8512", "0", "0", "0", "0"],
["Tarmogobs.7186", "3", "3", "8", "6"],
["Tien.4913", "2", "0", "4", "0"],
["sachaa.8706", "3", "0", "10", "1"],
["DaragangMagayon.1795", "2", "0", "6", "0"],
["Raijin.8452", "0", "0", "1", "0"],
["SayuriXY.2593", "3", "0", "9", "2"],
["Kodes.5784", "4", "4", "11", "11"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "2", "1", "2", "1"],
["Suricatta.1029", "1", "1", "3", "3"],
["amrtime.2150", "0", "0", "0", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["Ganix.1957", "5", "5", "15", "15"],
["morsel.4670", "5", "5", "15", "15"],
["DaBMz.5724", "4", "4", "9", "8"],
["LiLMochaJoe.7456", "3", "3", "12", "11"],
["Adesso e Fortuna.4085", "0", "0", "0", "0"],
["Lhew.1904", "2", "2", "3", "3"],
["Kharashadora.9043", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["KrimsonWolf.6781", "3", "3", "5", "5"],
["Luetenant.3178", "0", "0", "3", "0"],
["Zugare.9032", "1", "1", "2", "2"],
["Maleficpanda.8350", "4", "2", "5", "2"],
["Beer Meister.5938", "0", "0", "0", "0"],
["Singe.6103", "0", "0", "0", "0"],
["Spades.2603", "0", "0", "2", "0"],
["PolarBear.5836", "0", "0", "0", "0"],
["Grootella.1270", "0", "0", "5", "4"],
["Arkanus.5304", "2", "1", "7", "5"],
["Meen.2467", "5", "3", "10", "7"],
["ItIsAllAboutCake.6125", "5", "4", "12", "11"],
["Ayemes.5892", "0", "0", "1", "0"],
["gferreira.1862", "1", "0", "5", "2"],
["Ryulightorb.8407", "0", "0", "2", "2"],
["eirka.1892", "1", "1", "4", "4"],
["DanDizh.8416", "0", "0", "0", "0"],
["Nexle.8320", "1", "0", "7", "4"],
["Calgari.8671", "1", "1", "7", "4"],
["Banchou.5628", "5", "5", "15", "13"],
["Biot.7201", "2", "2", "10", "7"],
["Sef.7382", "0", "0", "1", "0"],
["IamXillah.2153", "0", "0", "0", "0"],
["Shrimpsanity.2107", "1", "1", "5", "3"],
["Kalen Keywarden.4356", "0", "0", "0", "0"],
["Hikaro.1743", "3", "0", "4", "0"],
["TechnoTK.6498", "0", "0", "1", "1"],
["Mori.8729", "1", "0", "7", "0"],
["Swagasarus.6150", "2", "1", "6", "3"],
["Icy Violin.9213", "1", "0", "3", "0"],
["takamina.9784", "0", "0", "7", "5"],
["Dirddle.8524", "3", "1", "11", "6"],
["Stay Alive.2917", "4", "4", "11", "9"],
["mrhnwt.9084", "4", "4", "11", "11"],
["Adiduh.9785", "0", "0", "0", "0"],
["juniippurr.9521", "5", "5", "13", "13"],
["rawrking.1958", "3", "1", "4", "2"],
["Beecher Hyde.9023", "0", "0", "4", "0"],
["MONI.6195", "2", "0", "3", "0"],
["Ambroise Diggs.5692", "0", "0", "1", "1"],
["Chapchap.6107", "3", "3", "7", "6"],
["BugTheDebugger.2465", "1", "0", "3", "0"],
["TooFee.3196", "3", "0", "9", "0"],
["Quercus helvetica.6093", "2", "0", "5", "2"],
["Titan.1784", "0", "0", "0", "0"],
["Crixfal.7452", "1", "0", "2", "0"],
["Oshamaya.6195", "2", "0", "4", "0"],
["Chauncley.9140", "0", "0", "0", "0"],
["Escaflow.5407", "0", "0", "0", "0"],
["Mystic Vet.2317", "1", "0", "1", "0"],
["Obisaurus.8960", "0", "0", "0", "0"],
["kodo.4087", "1", "0", "1", "0"],
		],
	sort: true,
	search: true,
	fixedHeader: true,
  style: {
    table: {
      'border': '3px solid #ccc'
    },
    th: {
      'background-color': 'rgb(32,32,32)',
      'color': '#FFFFFF',
      'border-bottom': '3px solid #ccc',
      'text-align': 'center'
    },
   td: {
	   'background-color': 'rgb(88,88,88)',
      'color': '#FFFFFF',
      'text-align': 'left'	 
    }
  }
}).render(document.getElementById("wrapper"));

new gridjs.Grid({columns: ["Last Run"],data: [["09/16/2025 21:58:24"]],		
	
  style: {
    table: {
      'border': '3px solid #ccc'
    },
    th: {
      'background-color': 'rgb(32,32,32)',
      'color': '#FFFFFF',
      'border-bottom': '3px solid #ccc',
      'text-align': 'center'
    },
   td: {
	   'background-color': 'rgb(88,88,88)',
      'color': '#FFFFFF',
      'text-align': 'center'	 
    }
  }
}).render(document.getElementById("datetime"));


