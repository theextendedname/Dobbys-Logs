new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "3", "12", "10"],
["theextendedname.4879", "5", "4", "20", "16"],
["Batercus.6257", "4", "2", "18", "5"],
["Bloop.2831", "5", "5", "19", "16"],
["Suricatta.1029", "2", "2", "7", "7"],
["morsel.4670", "4", "4", "19", "19"],
["LiLMochaJoe.7456", "1", "1", "8", "8"],
["Kharashadora.9043", "0", "0", "2", "0"],
["KrimsonWolf.6781", "3", "2", "10", "8"],
["Beer Meister.5938", "0", "0", "0", "0"],
["ItIsAllAboutCake.6125", "4", "4", "17", "16"],
["Calgari.8671", "2", "0", "11", "5"],
["Banchou.5628", "4", "3", "11", "10"],
["Biot.7201", "3", "2", "13", "6"],
["Ity.3504", "3", "0", "16", "0"],
["Hikaro.1743", "2", "1", "7", "2"],
["TechnoTK.6498", "0", "0", "6", "3"],
["Ganix.1957", "4", "3", "18", "15"],
["Berticus.8167", "0", "0", "3", "1"],
["Grootella.1270", "3", "2", "13", "10"],
["Swagasarus.6150", "4", "0", "14", "1"],
["Dirddle.8524", "4", "2", "19", "8"],
["Stay Alive.2917", "4", "2", "10", "6"],
["sadmantha.6841", "5", "5", "17", "16"],
["Mori.8729", "3", "0", "9", "0"],
["JCthirteen.1985", "3", "1", "7", "3"],
["juniippurr.9521", "4", "4", "13", "12"],
["Mogar.8462", "0", "0", "0", "0"],
["Gambit.8512", "2", "2", "6", "6"],
["Elani.1394", "0", "0", "2", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "1", "1", "9", "9"],
["Nexle.8320", "3", "1", "12", "8"],
["Soushi.5132", "3", "1", "13", "1"],
["sachaa.8706", "5", "1", "18", "1"],
["Zugare.9032", "0", "0", "3", "2"],
["DaragangMagayon.1795", "1", "0", "8", "0"],
["takamina.9784", "2", "2", "14", "11"],
["Sglobe.4827", "5", "5", "20", "20"],
["Rage.3169", "0", "0", "0", "0"],
["DanDizh.8416", "0", "0", "11", "0"],
["Maleficpanda.8350", "0", "0", "4", "1"],
["Levofloxacin.3705", "0", "0", "0", "0"],
["gferreira.1862", "2", "2", "10", "5"],
["Ayemes.5892", "0", "0", "2", "0"],
["Jarmeister.3419", "2", "0", "13", "2"],
["Divinebladez.7982", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["Halcyonic.4065", "1", "0", "3", "0"],
["LaggahGaming.5286", "0", "0", "0", "0"],
["Adiduh.9785", "3", "0", "7", "0"],
["karierys.1248", "0", "0", "0", "0"],
["Razgriz.6075", "0", "0", "1", "0"],
["Ryulightorb.8407", "0", "0", "1", "1"],
["Shrimpsanity.2107", "0", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["07/21/2025 10:29:23"]],		
	
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


