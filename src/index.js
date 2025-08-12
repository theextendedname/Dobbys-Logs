new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "0", "0", "5", "5"],
["theextendedname.4879", "6", "6", "20", "17"],
["Batercus.6257", "3", "1", "13", "5"],
["Bloop.2831", "6", "6", "18", "17"],
["virtual.3879", "0", "0", "0", "0"],
["Soushi.5132", "2", "0", "11", "1"],
["Berticus.8167", "0", "0", "0", "0"],
["Talcos.9723", "1", "1", "3", "2"],
["Gambit.8512", "0", "0", "7", "6"],
["PeriWrinkleButt.8691", "0", "0", "1", "0"],
["sachaa.8706", "1", "1", "13", "5"],
["DaragangMagayon.1795", "2", "0", "7", "0"],
["Raijin.8452", "1", "0", "2", "0"],
["Kodes.5784", "4", "4", "5", "5"],
["karierys.1248", "0", "0", "0", "0"],
["MrMarcello.3894", "0", "0", "0", "0"],
["bitshift.5491", "0", "0", "0", "0"],
["Suricatta.1029", "1", "1", "6", "6"],
["amrtime.2150", "1", "0", "1", "0"],
["JCthirteen.1985", "0", "0", "4", "2"],
["Jarmeister.3419", "0", "0", "3", "1"],
["Halcyonic.4065", "0", "0", "1", "0"],
["Ganix.1957", "6", "5", "19", "17"],
["morsel.4670", "6", "5", "19", "18"],
["DaBMz.5724", "0", "0", "4", "1"],
["Rage.3169", "0", "0", "0", "0"],
["LiLMochaJoe.7456", "3", "1", "8", "6"],
["Kharashadora.9043", "2", "0", "2", "0"],
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
["Arkanus.5304", "3", "3", "5", "5"],
["Meen.2467", "2", "1", "4", "1"],
["ItIsAllAboutCake.6125", "5", "4", "17", "13"],
["Ayemes.5892", "0", "0", "1", "1"],
["gferreira.1862", "1", "1", "5", "5"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Ryulightorb.8407", "0", "0", "1", "1"],
["DanDizh.8416", "0", "0", "0", "0"],
["Nexle.8320", "3", "3", "11", "7"],
["Calgari.8671", "0", "0", "6", "3"],
["Banchou.5628", "4", "3", "17", "15"],
["Biot.7201", "2", "0", "9", "6"],
["Sef.7382", "0", "0", "0", "0"],
["IamXillah.2153", "0", "0", "0", "0"],
["Hiram.6972", "0", "0", "0", "0"],
["Shrimpsanity.2107", "1", "1", "2", "2"],
["Kalen Keywarden.4356", "0", "0", "1", "0"],
["Hikaro.1743", "0", "0", "4", "1"],
["TechnoTK.6498", "2", "2", "3", "3"],
["Mori.8729", "1", "0", "8", "0"],
["Swagasarus.6150", "3", "1", "12", "3"],
["Icy Violin.9213", "0", "0", "0", "0"],
["takamina.9784", "4", "4", "11", "11"],
["Dirddle.8524", "4", "3", "16", "12"],
["Stay Alive.2917", "4", "3", "16", "11"],
["mrhnwt.9084", "4", "4", "8", "6"],
["Adiduh.9785", "3", "1", "11", "2"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["08/12/2025 10:15:43"]],		
	
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


