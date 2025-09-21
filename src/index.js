new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "3", "11", "9"],
["theextendedname.4879", "5", "5", "16", "14"],
["Batercus.6257", "4", "1", "11", "4"],
["Bloop.2831", "4", "4", "12", "12"],
["virtual.3879", "2", "0", "2", "0"],
["Soushi.5132", "3", "0", "9", "0"],
["Berticus.8167", "0", "0", "1", "1"],
["Talcos.9723", "1", "1", "4", "3"],
["Gambit.8512", "0", "0", "0", "0"],
["Tarmogobs.7186", "3", "3", "9", "7"],
["Tien.4913", "1", "0", "4", "0"],
["sachaa.8706", "2", "0", "9", "1"],
["DaragangMagayon.1795", "2", "0", "5", "0"],
["Raijin.8452", "0", "0", "1", "0"],
["SayuriXY.2593", "2", "0", "7", "2"],
["Kodes.5784", "3", "3", "10", "10"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "2", "0", "3", "1"],
["Suricatta.1029", "1", "1", "4", "4"],
["amrtime.2150", "0", "0", "0", "0"],
["JCthirteen.1985", "1", "0", "1", "0"],
["Ganix.1957", "4", "3", "15", "14"],
["morsel.4670", "5", "5", "16", "16"],
["DaBMz.5724", "2", "2", "7", "7"],
["LiLMochaJoe.7456", "2", "2", "11", "11"],
["Adesso e Fortuna.4085", "0", "0", "0", "0"],
["Lhew.1904", "2", "2", "4", "4"],
["Kharashadora.9043", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["KrimsonWolf.6781", "2", "2", "6", "6"],
["Luetenant.3178", "2", "0", "3", "0"],
["Zugare.9032", "0", "0", "2", "2"],
["Maleficpanda.8350", "2", "2", "4", "2"],
["Beer Meister.5938", "0", "0", "0", "0"],
["Singe.6103", "0", "0", "0", "0"],
["Spades.2603", "0", "0", "2", "0"],
["PolarBear.5836", "0", "0", "0", "0"],
["Grootella.1270", "0", "0", "4", "3"],
["Arkanus.5304", "0", "0", "5", "4"],
["Meen.2467", "5", "3", "12", "8"],
["ItIsAllAboutCake.6125", "5", "5", "13", "12"],
["Ayemes.5892", "0", "0", "1", "0"],
["gferreira.1862", "2", "0", "4", "0"],
["Ryulightorb.8407", "1", "0", "1", "0"],
["eirka.1892", "1", "0", "5", "4"],
["DanDizh.8416", "0", "0", "0", "0"],
["Nexle.8320", "2", "1", "7", "3"],
["Calgari.8671", "2", "1", "6", "3"],
["Banchou.5628", "5", "4", "16", "13"],
["Biot.7201", "0", "0", "8", "7"],
["Sef.7382", "0", "0", "0", "0"],
["IamXillah.2153", "0", "0", "0", "0"],
["Shrimpsanity.2107", "1", "1", "3", "2"],
["Kalen Keywarden.4356", "0", "0", "0", "0"],
["Hikaro.1743", "3", "0", "5", "0"],
["TechnoTK.6498", "1", "0", "2", "1"],
["Mori.8729", "2", "0", "6", "0"],
["Swagasarus.6150", "2", "0", "6", "2"],
["Icy Violin.9213", "0", "0", "3", "0"],
["takamina.9784", "0", "0", "5", "3"],
["Dirddle.8524", "2", "0", "11", "4"],
["Stay Alive.2917", "5", "4", "13", "10"],
["mrhnwt.9084", "4", "4", "11", "11"],
["Adiduh.9785", "0", "0", "0", "0"],
["juniippurr.9521", "5", "5", "14", "14"],
["rawrking.1958", "2", "0", "5", "2"],
["Beecher Hyde.9023", "0", "0", "4", "0"],
["MONI.6195", "2", "0", "4", "0"],
["Ambroise Diggs.5692", "0", "0", "1", "1"],
["Chapchap.6107", "2", "2", "7", "6"],
["BugTheDebugger.2465", "2", "0", "4", "0"],
["TooFee.3196", "2", "0", "9", "0"],
["Quercus helvetica.6093", "1", "0", "5", "2"],
["Titan.1784", "1", "0", "1", "0"],
["Crixfal.7452", "1", "0", "2", "0"],
["Oshamaya.6195", "2", "0", "5", "0"],
["Chauncley.9140", "0", "0", "0", "0"],
["Escaflow.5407", "0", "0", "0", "0"],
["Mystic Vet.2317", "1", "0", "1", "0"],
["Obisaurus.8960", "2", "0", "2", "0"],
["kodo.4087", "2", "0", "2", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["09/21/2025 10:19:30"]],		
	
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


