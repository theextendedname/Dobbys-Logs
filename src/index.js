new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "0", "0", "7", "7"],
["theextendedname.4879", "5", "4", "19", "16"],
["Batercus.6257", "4", "1", "14", "5"],
["Bloop.2831", "3", "3", "17", "15"],
["Suricatta.1029", "2", "2", "7", "7"],
["morsel.4670", "5", "5", "18", "18"],
["LiLMochaJoe.7456", "4", "2", "9", "7"],
["Kharashadora.9043", "1", "0", "1", "0"],
["KrimsonWolf.6781", "2", "2", "9", "8"],
["Beer Meister.5938", "1", "0", "1", "0"],
["ItIsAllAboutCake.6125", "3", "1", "15", "11"],
["Calgari.8671", "1", "1", "6", "3"],
["Banchou.5628", "5", "5", "17", "16"],
["Biot.7201", "3", "1", "10", "6"],
["Hikaro.1743", "0", "0", "5", "1"],
["TechnoTK.6498", "0", "0", "1", "1"],
["Ganix.1957", "5", "4", "18", "16"],
["Berticus.8167", "0", "0", "1", "0"],
["Grootella.1270", "3", "3", "13", "12"],
["Swagasarus.6150", "1", "0", "11", "2"],
["Dirddle.8524", "4", "3", "16", "10"],
["Stay Alive.2917", "5", "4", "16", "12"],
["sadmantha.6841", "4", "4", "15", "15"],
["Mori.8729", "1", "0", "7", "0"],
["JCthirteen.1985", "0", "0", "5", "2"],
["juniippurr.9521", "3", "3", "14", "13"],
["Gambit.8512", "2", "2", "7", "6"],
["Elani.1394", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "3", "3"],
["Nexle.8320", "1", "0", "9", "5"],
["Soushi.5132", "1", "0", "10", "1"],
["sachaa.8706", "2", "2", "15", "4"],
["Zugare.9032", "0", "0", "2", "2"],
["DaragangMagayon.1795", "0", "0", "6", "0"],
["takamina.9784", "1", "1", "8", "8"],
["Sglobe.4827", "5", "5", "19", "19"],
["Rage.3169", "0", "0", "0", "0"],
["DanDizh.8416", "0", "0", "2", "0"],
["Maleficpanda.8350", "0", "0", "0", "0"],
["gferreira.1862", "1", "1", "5", "5"],
["Ayemes.5892", "0", "0", "1", "1"],
["Jarmeister.3419", "0", "0", "5", "2"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "0", "0", "1", "0"],
["Adiduh.9785", "2", "0", "9", "1"],
["karierys.1248", "0", "0", "0", "0"],
["Razgriz.6075", "0", "0", "1", "0"],
["Ryulightorb.8407", "0", "0", "1", "1"],
["Shrimpsanity.2107", "1", "1", "1", "1"],
["MrMarcello.3894", "0", "0", "0", "0"],
["Sef.7382", "0", "0", "0", "0"],
["Raijin.8452", "1", "0", "1", "0"],
["Hiram.6972", "0", "0", "0", "0"],
["Meen.2467", "3", "1", "3", "1"],
["DaBMz.5724", "3", "1", "4", "1"],
["PeriWrinkleButt.8691", "0", "0", "1", "0"],
["IamXillah.2153", "0", "0", "0", "0"],
["mrhnwt.9084", "2", "2", "5", "3"],
["Talcos.9723", "2", "2", "3", "2"],
["Singe.6103", "1", "0", "1", "0"],
["Kodes.5784", "1", "1", "1", "1"],
["PolarBear.5836", "0", "0", "1", "1"],
["Kalen Keywarden.4356", "0", "0", "1", "0"],
["amrtime.2150", "1", "0", "1", "0"],
["Icy Violin.9213", "0", "0", "0", "0"],
["Arkanus.5304", "3", "3", "4", "4"],
["virtual.3879", "0", "0", "0", "0"],
["bitshift.5491", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["08/07/2025 22:10:28"]],		
	
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


