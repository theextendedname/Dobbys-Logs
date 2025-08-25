new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "4", "3", "5", "4"],
["theextendedname.4879", "3", "3", "18", "17"],
["Batercus.6257", "1", "0", "10", "4"],
["Bloop.2831", "4", "4", "17", "17"],
["virtual.3879", "0", "0", "0", "0"],
["Soushi.5132", "3", "0", "11", "0"],
["Berticus.8167", "0", "0", "0", "0"],
["Talcos.9723", "0", "0", "3", "2"],
["Gambit.8512", "0", "0", "5", "3"],
["gspM.4169", "3", "0", "3", "0"],
["Tien.4913", "0", "0", "1", "0"],
["sachaa.8706", "3", "0", "11", "4"],
["DaragangMagayon.1795", "3", "0", "8", "0"],
["Raijin.8452", "0", "0", "4", "0"],
["SayuriXY.2593", "4", "1", "4", "1"],
["Kodes.5784", "4", "4", "11", "10"],
["MrMarcello.3894", "0", "0", "0", "0"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "0", "0", "0", "0"],
["Suricatta.1029", "0", "0", "3", "3"],
["amrtime.2150", "0", "0", "1", "0"],
["JCthirteen.1985", "0", "0", "1", "1"],
["Jarmeister.3419", "0", "0", "0", "0"],
["Ganix.1957", "4", "4", "17", "16"],
["morsel.4670", "4", "4", "19", "18"],
["DaBMz.5724", "2", "1", "7", "2"],
["LiLMochaJoe.7456", "3", "2", "11", "6"],
["Adesso e Fortuna.4085", "0", "0", "0", "0"],
["Lhew.1904", "0", "0", "0", "0"],
["Kharashadora.9043", "0", "0", "2", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["KrimsonWolf.6781", "0", "0", "6", "6"],
["Luetenant.3178", "3", "0", "3", "0"],
["Zugare.9032", "0", "0", "0", "0"],
["Maleficpanda.8350", "1", "0", "1", "0"],
["Razgriz.6075", "0", "0", "0", "0"],
["Beer Meister.5938", "0", "0", "1", "0"],
["Singe.6103", "0", "0", "1", "0"],
["Spades.2603", "0", "0", "0", "0"],
["PolarBear.5836", "0", "0", "1", "1"],
["Elani.1394", "0", "0", "0", "0"],
["Grootella.1270", "1", "1", "9", "9"],
["Arkanus.5304", "3", "2", "10", "9"],
["Meen.2467", "2", "1", "6", "2"],
["ItIsAllAboutCake.6125", "3", "3", "16", "12"],
["Ayemes.5892", "0", "0", "1", "1"],
["gferreira.1862", "3", "2", "6", "5"],
["Ryulightorb.8407", "2", "2", "3", "3"],
["eirka.1892", "0", "0", "0", "0"],
["DanDizh.8416", "0", "0", "0", "0"],
["Nexle.8320", "4", "3", "13", "9"],
["Calgari.8671", "3", "2", "5", "4"],
["Banchou.5628", "4", "2", "17", "14"],
["Biot.7201", "3", "0", "7", "2"],
["Sef.7382", "1", "0", "2", "0"],
["IamXillah.2153", "0", "0", "0", "0"],
["Hiram.6972", "0", "0", "0", "0"],
["Shrimpsanity.2107", "2", "1", "4", "3"],
["Kalen Keywarden.4356", "0", "0", "1", "0"],
["Hikaro.1743", "0", "0", "1", "0"],
["TechnoTK.6498", "0", "0", "3", "3"],
["Mori.8729", "4", "0", "9", "0"],
["Swagasarus.6150", "3", "2", "10", "3"],
["Icy Violin.9213", "0", "0", "1", "0"],
["takamina.9784", "3", "3", "14", "12"],
["Dirddle.8524", "4", "4", "17", "14"],
["Stay Alive.2917", "2", "2", "14", "10"],
["mrhnwt.9084", "4", "4", "13", "11"],
["Adiduh.9785", "0", "0", "8", "2"],
["juniippurr.9521", "3", "3", "13", "13"],
["rawrking.1958", "0", "0", "0", "0"],
["Beecher Hyde.9023", "1", "0", "1", "0"],
["MONI.6195", "0", "0", "1", "0"],
["Ambroise Diggs.5692", "0", "0", "0", "0"],
["BugTheDebugger.2465", "0", "0", "0", "0"],
["TooFee.3196", "2", "0", "2", "0"],
["Quercus helvetica.6093", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["08/24/2025 22:19:49"]],		
	
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


