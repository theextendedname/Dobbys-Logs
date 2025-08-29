new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "2", "6", "5"],
["theextendedname.4879", "3", "1", "18", "15"],
["Batercus.6257", "1", "1", "10", "4"],
["Bloop.2831", "2", "2", "15", "15"],
["virtual.3879", "0", "0", "0", "0"],
["Soushi.5132", "1", "0", "9", "0"],
["Berticus.8167", "0", "0", "0", "0"],
["Talcos.9723", "1", "1", "4", "3"],
["Gambit.8512", "0", "0", "3", "2"],
["Tarmogobs.7186", "1", "1", "1", "1"],
["Tien.4913", "0", "0", "1", "0"],
["sachaa.8706", "1", "0", "9", "4"],
["DaragangMagayon.1795", "1", "0", "6", "0"],
["Raijin.8452", "0", "0", "4", "0"],
["SayuriXY.2593", "2", "1", "4", "1"],
["Kodes.5784", "2", "2", "11", "10"],
["MrMarcello.3894", "0", "0", "0", "0"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "0", "0", "0", "0"],
["Suricatta.1029", "1", "1", "4", "4"],
["amrtime.2150", "0", "0", "1", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["Jarmeister.3419", "0", "0", "0", "0"],
["Ganix.1957", "3", "3", "16", "15"],
["morsel.4670", "3", "3", "18", "17"],
["DaBMz.5724", "1", "1", "7", "3"],
["LiLMochaJoe.7456", "3", "3", "13", "8"],
["Adesso e Fortuna.4085", "0", "0", "0", "0"],
["Lhew.1904", "0", "0", "0", "0"],
["Kharashadora.9043", "0", "0", "2", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["KrimsonWolf.6781", "1", "1", "6", "6"],
["Luetenant.3178", "1", "0", "3", "0"],
["Zugare.9032", "0", "0", "0", "0"],
["Maleficpanda.8350", "0", "0", "1", "0"],
["Razgriz.6075", "0", "0", "0", "0"],
["Beer Meister.5938", "0", "0", "1", "0"],
["Singe.6103", "0", "0", "1", "0"],
["Spades.2603", "0", "0", "0", "0"],
["PolarBear.5836", "0", "0", "1", "1"],
["Elani.1394", "0", "0", "0", "0"],
["Grootella.1270", "2", "1", "10", "9"],
["Arkanus.5304", "1", "1", "10", "9"],
["Meen.2467", "2", "1", "7", "3"],
["ItIsAllAboutCake.6125", "2", "2", "15", "11"],
["Ayemes.5892", "0", "0", "0", "0"],
["gferreira.1862", "1", "0", "5", "4"],
["Ryulightorb.8407", "0", "0", "3", "3"],
["eirka.1892", "1", "1", "1", "1"],
["DanDizh.8416", "0", "0", "0", "0"],
["Nexle.8320", "2", "1", "11", "8"],
["Calgari.8671", "1", "1", "4", "3"],
["Banchou.5628", "3", "1", "16", "13"],
["Biot.7201", "2", "1", "8", "3"],
["Sef.7382", "0", "0", "2", "0"],
["IamXillah.2153", "0", "0", "0", "0"],
["Hiram.6972", "0", "0", "0", "0"],
["Shrimpsanity.2107", "0", "0", "4", "3"],
["Kalen Keywarden.4356", "0", "0", "1", "0"],
["Hikaro.1743", "0", "0", "0", "0"],
["TechnoTK.6498", "0", "0", "2", "2"],
["Mori.8729", "2", "0", "8", "0"],
["Swagasarus.6150", "2", "1", "8", "3"],
["Icy Violin.9213", "1", "0", "2", "0"],
["takamina.9784", "1", "1", "12", "10"],
["Dirddle.8524", "3", "2", "16", "13"],
["Stay Alive.2917", "3", "1", "15", "9"],
["mrhnwt.9084", "2", "2", "11", "10"],
["Adiduh.9785", "0", "0", "6", "1"],
["juniippurr.9521", "2", "2", "12", "12"],
["rawrking.1958", "0", "0", "0", "0"],
["Beecher Hyde.9023", "1", "0", "1", "0"],
["MONI.6195", "0", "0", "1", "0"],
["Ambroise Diggs.5692", "0", "0", "0", "0"],
["Chapchap.6107", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["08/28/2025 22:08:15"]],		
	
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


