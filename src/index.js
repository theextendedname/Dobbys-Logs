new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "2", "5", "5"],
["theextendedname.4879", "6", "6", "21", "19"],
["Batercus.6257", "2", "2", "12", "5"],
["Bloop.2831", "6", "6", "19", "18"],
["virtual.3879", "0", "0", "0", "0"],
["Soushi.5132", "4", "0", "12", "1"],
["Berticus.8167", "0", "0", "0", "0"],
["Talcos.9723", "0", "0", "3", "2"],
["Gambit.8512", "1", "0", "7", "5"],
["gspM.4169", "1", "0", "1", "0"],
["Tien.4913", "1", "0", "1", "0"],
["sachaa.8706", "4", "1", "13", "5"],
["DaragangMagayon.1795", "3", "0", "8", "0"],
["Raijin.8452", "2", "0", "4", "0"],
["SayuriXY.2593", "1", "0", "1", "0"],
["Kodes.5784", "5", "4", "8", "7"],
["MrMarcello.3894", "0", "0", "0", "0"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "0", "0", "0", "0"],
["Suricatta.1029", "1", "1", "5", "5"],
["amrtime.2150", "0", "0", "1", "0"],
["JCthirteen.1985", "0", "0", "3", "2"],
["Jarmeister.3419", "0", "0", "1", "0"],
["Halcyonic.4065", "0", "0", "0", "0"],
["Ganix.1957", "4", "4", "18", "17"],
["morsel.4670", "6", "6", "21", "20"],
["DaBMz.5724", "2", "1", "6", "2"],
["Rage.3169", "0", "0", "0", "0"],
["LiLMochaJoe.7456", "3", "1", "9", "5"],
["Lhew.1904", "0", "0", "0", "0"],
["Kharashadora.9043", "0", "0", "2", "0"],
["MarcB.1853", "0", "0", "1", "1"],
["jtheoof.9205", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["KrimsonWolf.6781", "1", "1", "8", "7"],
["Luetenant.3178", "1", "0", "1", "0"],
["Zugare.9032", "0", "0", "2", "2"],
["Maleficpanda.8350", "0", "0", "0", "0"],
["Razgriz.6075", "0", "0", "0", "0"],
["Beer Meister.5938", "0", "0", "1", "0"],
["Singe.6103", "0", "0", "1", "0"],
["Spades.2603", "0", "0", "0", "0"],
["PolarBear.5836", "0", "0", "1", "1"],
["Elani.1394", "0", "0", "0", "0"],
["Grootella.1270", "2", "2", "11", "10"],
["Arkanus.5304", "3", "3", "8", "8"],
["Meen.2467", "0", "0", "4", "1"],
["ItIsAllAboutCake.6125", "6", "4", "19", "13"],
["Ayemes.5892", "0", "0", "1", "1"],
["gferreira.1862", "2", "2", "6", "6"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Ryulightorb.8407", "1", "1", "2", "2"],
["eirka.1892", "0", "0", "0", "0"],
["DanDizh.8416", "0", "0", "0", "0"],
["Nexle.8320", "5", "4", "12", "7"],
["Calgari.8671", "1", "1", "6", "3"],
["Banchou.5628", "5", "4", "18", "17"],
["Biot.7201", "1", "0", "8", "4"],
["Sef.7382", "1", "0", "1", "0"],
["IamXillah.2153", "0", "0", "0", "0"],
["Hiram.6972", "0", "0", "0", "0"],
["Shrimpsanity.2107", "1", "1", "3", "3"],
["Kalen Keywarden.4356", "0", "0", "1", "0"],
["Hikaro.1743", "0", "0", "2", "0"],
["TechnoTK.6498", "0", "0", "3", "3"],
["Mori.8729", "3", "0", "9", "0"],
["Swagasarus.6150", "2", "0", "11", "3"],
["Icy Violin.9213", "1", "0", "1", "0"],
["takamina.9784", "6", "4", "14", "12"],
["Dirddle.8524", "5", "4", "17", "14"],
["Stay Alive.2917", "3", "1", "16", "10"],
["mrhnwt.9084", "4", "4", "10", "8"],
["Adiduh.9785", "1", "0", "10", "2"],
["juniippurr.9521", "5", "5", "15", "15"],
["rawrking.1958", "0", "0", "0", "0"],
["Beecher Hyde.9023", "0", "0", "0", "0"],
["MONI.6195", "1", "0", "1", "0"],
["Ambroise Diggs.5692", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["08/17/2025 22:01:48"]],		
	
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


