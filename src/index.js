new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "0", "0", "8", "8"],
["theextendedname.4879", "5", "4", "19", "16"],
["Batercus.6257", "4", "0", "14", "4"],
["Bloop.2831", "3", "3", "17", "15"],
["Suricatta.1029", "1", "1", "7", "7"],
["morsel.4670", "5", "5", "18", "18"],
["LiLMochaJoe.7456", "4", "3", "9", "8"],
["Kharashadora.9043", "0", "0", "0", "0"],
["KrimsonWolf.6781", "3", "3", "9", "8"],
["Beer Meister.5938", "1", "0", "1", "0"],
["ItIsAllAboutCake.6125", "3", "2", "15", "12"],
["Calgari.8671", "1", "1", "7", "4"],
["Banchou.5628", "5", "5", "17", "16"],
["Biot.7201", "3", "2", "9", "6"],
["Hikaro.1743", "0", "0", "6", "1"],
["TechnoTK.6498", "0", "0", "1", "1"],
["Ganix.1957", "5", "4", "18", "16"],
["Berticus.8167", "0", "0", "1", "0"],
["Grootella.1270", "3", "3", "12", "11"],
["Swagasarus.6150", "1", "0", "12", "2"],
["Dirddle.8524", "4", "4", "16", "11"],
["Stay Alive.2917", "5", "4", "16", "11"],
["sadmantha.6841", "4", "4", "15", "15"],
["Mori.8729", "2", "0", "8", "0"],
["JCthirteen.1985", "0", "0", "5", "2"],
["juniippurr.9521", "2", "2", "14", "13"],
["Gambit.8512", "2", "2", "8", "7"],
["Elani.1394", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "4", "4"],
["Nexle.8320", "2", "1", "10", "6"],
["Soushi.5132", "2", "0", "11", "1"],
["sachaa.8706", "3", "3", "16", "4"],
["Zugare.9032", "0", "0", "2", "2"],
["DaragangMagayon.1795", "0", "0", "7", "0"],
["takamina.9784", "2", "2", "9", "9"],
["Sglobe.4827", "5", "5", "19", "19"],
["Rage.3169", "0", "0", "0", "0"],
["DanDizh.8416", "0", "0", "3", "0"],
["Maleficpanda.8350", "0", "0", "0", "0"],
["gferreira.1862", "1", "1", "6", "5"],
["Ayemes.5892", "0", "0", "1", "1"],
["Jarmeister.3419", "0", "0", "6", "2"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "0", "0", "1", "0"],
["Adiduh.9785", "3", "0", "10", "1"],
["karierys.1248", "0", "0", "0", "0"],
["Razgriz.6075", "0", "0", "1", "0"],
["Ryulightorb.8407", "1", "1", "2", "2"],
["Shrimpsanity.2107", "1", "1", "1", "1"],
["MrMarcello.3894", "0", "0", "0", "0"],
["Sef.7382", "0", "0", "0", "0"],
["Raijin.8452", "1", "0", "1", "0"],
["Hiram.6972", "0", "0", "0", "0"],
["Meen.2467", "3", "1", "3", "1"],
["DaBMz.5724", "3", "1", "4", "1"],
["PeriWrinkleButt.8691", "0", "0", "1", "0"],
["IamXillah.2153", "0", "0", "0", "0"],
["mrhnwt.9084", "2", "1", "4", "2"],
["Talcos.9723", "2", "1", "2", "1"],
["Singe.6103", "1", "0", "1", "0"],
["Kodes.5784", "1", "1", "1", "1"],
["PolarBear.5836", "1", "1", "1", "1"],
["Kalen Keywarden.4356", "1", "0", "1", "0"],
["amrtime.2150", "0", "0", "0", "0"],
["Icy Violin.9213", "0", "0", "0", "0"],
["Arkanus.5304", "3", "3", "3", "3"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["08/05/2025 21:56:03"]],		
	
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


