new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "0", "0", "4", "4"],
["theextendedname.4879", "6", "6", "20", "18"],
["Batercus.6257", "3", "2", "13", "6"],
["Bloop.2831", "6", "6", "18", "17"],
["virtual.3879", "0", "0", "0", "0"],
["Soushi.5132", "3", "0", "10", "1"],
["Berticus.8167", "0", "0", "0", "0"],
["Talcos.9723", "0", "0", "3", "2"],
["Gambit.8512", "0", "0", "7", "6"],
["sachaa.8706", "3", "1", "13", "5"],
["DaragangMagayon.1795", "2", "0", "6", "0"],
["Raijin.8452", "3", "0", "4", "0"],
["Kodes.5784", "5", "4", "6", "5"],
["karierys.1248", "0", "0", "0", "0"],
["MrMarcello.3894", "0", "0", "0", "0"],
["bitshift.5491", "0", "0", "0", "0"],
["Suricatta.1029", "1", "1", "6", "6"],
["amrtime.2150", "0", "0", "1", "0"],
["JCthirteen.1985", "0", "0", "3", "2"],
["Jarmeister.3419", "0", "0", "1", "0"],
["Halcyonic.4065", "0", "0", "1", "0"],
["Ganix.1957", "4", "4", "17", "15"],
["morsel.4670", "6", "5", "20", "19"],
["DaBMz.5724", "1", "0", "5", "1"],
["Rage.3169", "0", "0", "0", "0"],
["LiLMochaJoe.7456", "3", "1", "9", "5"],
["Kharashadora.9043", "1", "0", "2", "0"],
["MarcB.1853", "0", "0", "1", "1"],
["jtheoof.9205", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["KrimsonWolf.6781", "2", "2", "9", "8"],
["Zugare.9032", "0", "0", "2", "2"],
["Maleficpanda.8350", "0", "0", "0", "0"],
["Razgriz.6075", "0", "0", "0", "0"],
["Beer Meister.5938", "0", "0", "1", "0"],
["Singe.6103", "0", "0", "1", "0"],
["PolarBear.5836", "0", "0", "1", "1"],
["Elani.1394", "0", "0", "0", "0"],
["Grootella.1270", "3", "3", "12", "11"],
["Arkanus.5304", "3", "3", "7", "7"],
["Meen.2467", "1", "0", "4", "1"],
["ItIsAllAboutCake.6125", "6", "4", "17", "11"],
["Ayemes.5892", "0", "0", "1", "1"],
["gferreira.1862", "1", "1", "5", "5"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Ryulightorb.8407", "0", "0", "1", "1"],
["DanDizh.8416", "0", "0", "0", "0"],
["Nexle.8320", "4", "3", "10", "5"],
["Calgari.8671", "0", "0", "5", "2"],
["Banchou.5628", "4", "3", "17", "16"],
["Biot.7201", "0", "0", "8", "5"],
["Sef.7382", "1", "0", "1", "0"],
["IamXillah.2153", "0", "0", "0", "0"],
["Hiram.6972", "0", "0", "0", "0"],
["Shrimpsanity.2107", "1", "1", "2", "2"],
["Kalen Keywarden.4356", "0", "0", "1", "0"],
["Hikaro.1743", "0", "0", "3", "1"],
["TechnoTK.6498", "2", "2", "3", "3"],
["Mori.8729", "1", "0", "7", "0"],
["Swagasarus.6150", "3", "1", "11", "3"],
["Icy Violin.9213", "1", "0", "1", "0"],
["takamina.9784", "6", "4", "12", "10"],
["Dirddle.8524", "5", "4", "16", "12"],
["Stay Alive.2917", "5", "2", "17", "11"],
["mrhnwt.9084", "3", "3", "8", "6"],
["Adiduh.9785", "3", "1", "10", "2"],
["juniippurr.9521", "4", "4", "14", "14"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["08/15/2025 10:19:46"]],		
	
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


