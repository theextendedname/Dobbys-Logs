new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "1", "1", "5", "5"],
["theextendedname.4879", "6", "6", "21", "19"],
["Batercus.6257", "2", "2", "13", "6"],
["Bloop.2831", "6", "6", "19", "18"],
["virtual.3879", "0", "0", "0", "0"],
["Soushi.5132", "4", "0", "11", "1"],
["Berticus.8167", "0", "0", "0", "0"],
["Talcos.9723", "0", "0", "3", "2"],
["Gambit.8512", "1", "0", "8", "6"],
["gspM.4169", "0", "0", "0", "0"],
["Tien.4913", "1", "0", "1", "0"],
["sachaa.8706", "3", "1", "13", "5"],
["DaragangMagayon.1795", "3", "0", "7", "0"],
["Raijin.8452", "3", "0", "4", "0"],
["SayuriXY.2593", "0", "0", "0", "0"],
["Kodes.5784", "5", "4", "7", "6"],
["karierys.1248", "0", "0", "0", "0"],
["MrMarcello.3894", "0", "0", "0", "0"],
["bitshift.5491", "0", "0", "0", "0"],
["Suricatta.1029", "1", "1", "6", "6"],
["amrtime.2150", "0", "0", "1", "0"],
["JCthirteen.1985", "0", "0", "3", "2"],
["Jarmeister.3419", "0", "0", "1", "0"],
["Halcyonic.4065", "0", "0", "1", "0"],
["Ganix.1957", "4", "4", "18", "16"],
["morsel.4670", "6", "5", "21", "20"],
["DaBMz.5724", "1", "0", "5", "1"],
["Rage.3169", "0", "0", "0", "0"],
["LiLMochaJoe.7456", "2", "0", "9", "5"],
["Kharashadora.9043", "0", "0", "2", "0"],
["MarcB.1853", "0", "0", "1", "1"],
["jtheoof.9205", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["KrimsonWolf.6781", "1", "1", "9", "8"],
["Luetenant.3178", "0", "0", "0", "0"],
["Zugare.9032", "0", "0", "2", "2"],
["Maleficpanda.8350", "0", "0", "0", "0"],
["Razgriz.6075", "0", "0", "0", "0"],
["Beer Meister.5938", "0", "0", "1", "0"],
["Singe.6103", "0", "0", "1", "0"],
["PolarBear.5836", "0", "0", "1", "1"],
["Elani.1394", "0", "0", "0", "0"],
["Grootella.1270", "2", "2", "12", "11"],
["Arkanus.5304", "2", "2", "7", "7"],
["Meen.2467", "1", "0", "4", "1"],
["ItIsAllAboutCake.6125", "6", "4", "18", "12"],
["Ayemes.5892", "0", "0", "1", "1"],
["gferreira.1862", "1", "1", "5", "5"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Ryulightorb.8407", "0", "0", "1", "1"],
["eirka.1892", "0", "0", "0", "0"],
["DanDizh.8416", "0", "0", "0", "0"],
["Nexle.8320", "5", "4", "11", "6"],
["Calgari.8671", "0", "0", "5", "2"],
["Banchou.5628", "4", "3", "18", "17"],
["Biot.7201", "0", "0", "8", "5"],
["Sef.7382", "1", "0", "1", "0"],
["IamXillah.2153", "0", "0", "0", "0"],
["Hiram.6972", "0", "0", "0", "0"],
["Shrimpsanity.2107", "0", "0", "2", "2"],
["Kalen Keywarden.4356", "0", "0", "1", "0"],
["Hikaro.1743", "0", "0", "3", "1"],
["TechnoTK.6498", "1", "1", "3", "3"],
["Mori.8729", "2", "0", "8", "0"],
["Swagasarus.6150", "3", "1", "12", "3"],
["Icy Violin.9213", "1", "0", "1", "0"],
["takamina.9784", "6", "4", "13", "11"],
["Dirddle.8524", "5", "4", "17", "13"],
["Stay Alive.2917", "4", "1", "17", "11"],
["mrhnwt.9084", "4", "4", "9", "7"],
["Adiduh.9785", "2", "0", "10", "2"],
["juniippurr.9521", "5", "5", "15", "15"],
["rawrking.1958", "0", "0", "0", "0"],
["Beecher Hyde.9023", "0", "0", "0", "0"],
["MONI.6195", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["08/16/2025 09:43:26"]],		
	
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


