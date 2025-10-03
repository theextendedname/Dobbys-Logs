new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "1", "1", "9", "7"],
["theextendedname.4879", "5", "5", "18", "18"],
["Batercus.6257", "3", "3", "14", "6"],
["Bloop.2831", "5", "4", "16", "15"],
["virtual.3879", "2", "0", "5", "0"],
["Soushi.5132", "1", "0", "8", "0"],
["Berticus.8167", "0", "0", "1", "1"],
["Talcos.9723", "1", "1", "3", "3"],
["Tarmogobs.7186", "3", "1", "12", "6"],
["Tien.4913", "3", "1", "9", "1"],
["sachaa.8706", "4", "1", "11", "2"],
["DaragangMagayon.1795", "0", "0", "4", "0"],
["SayuriXY.2593", "0", "0", "5", "1"],
["Kodes.5784", "5", "4", "14", "13"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "4", "2", "8", "3"],
["Suricatta.1029", "2", "2", "5", "5"],
["JCthirteen.1985", "1", "0", "2", "0"],
["Ganix.1957", "5", "5", "18", "17"],
["morsel.4670", "5", "5", "18", "18"],
["DaBMz.5724", "4", "4", "9", "9"],
["LiLMochaJoe.7456", "3", "3", "12", "11"],
["Lhew.1904", "2", "2", "7", "7"],
["Kharashadora.9043", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["KrimsonWolf.6781", "2", "2", "7", "7"],
["Luetenant.3178", "0", "0", "2", "0"],
["Zugare.9032", "1", "1", "3", "3"],
["Maleficpanda.8350", "0", "0", "4", "2"],
["Beer Meister.5938", "1", "0", "1", "0"],
["Spades.2603", "0", "0", "1", "0"],
["Grootella.1270", "2", "1", "5", "3"],
["Arkanus.5304", "0", "0", "4", "3"],
["Meen.2467", "5", "4", "16", "12"],
["ItIsAllAboutCake.6125", "5", "5", "17", "16"],
["gferreira.1862", "1", "1", "4", "1"],
["Ryulightorb.8407", "0", "0", "1", "0"],
["eirka.1892", "1", "1", "5", "4"],
["Nexle.8320", "2", "0", "8", "2"],
["Calgari.8671", "0", "0", "5", "2"],
["Banchou.5628", "4", "4", "17", "15"],
["Biot.7201", "3", "0", "8", "5"],
["Shrimpsanity.2107", "0", "0", "3", "2"],
["Hikaro.1743", "2", "0", "8", "0"],
["TechnoTK.6498", "0", "0", "2", "1"],
["Mori.8729", "2", "0", "7", "0"],
["Swagasarus.6150", "2", "2", "6", "3"],
["Icy Violin.9213", "0", "0", "2", "0"],
["takamina.9784", "0", "0", "3", "2"],
["Dirddle.8524", "3", "1", "12", "3"],
["Stay Alive.2917", "3", "3", "13", "11"],
["mrhnwt.9084", "2", "2", "12", "12"],
["juniippurr.9521", "4", "4", "17", "17"],
["rawrking.1958", "2", "1", "8", "3"],
["Beecher Hyde.9023", "2", "0", "6", "0"],
["MONI.6195", "0", "0", "5", "0"],
["Ambroise Diggs.5692", "1", "1", "2", "2"],
["Chapchap.6107", "1", "1", "7", "7"],
["BugTheDebugger.2465", "0", "0", "4", "0"],
["Quercus helvetica.6093", "2", "0", "7", "3"],
["Titan.1784", "1", "0", "3", "0"],
["Crixfal.7452", "0", "0", "2", "0"],
["Oshamaya.6195", "1", "0", "7", "0"],
["Escaflow.5407", "0", "0", "0", "0"],
["Obisaurus.8960", "3", "2", "6", "3"],
["MysticVetSock.4078", "0", "0", "0", "0"],
["kodo.4087", "2", "1", "5", "2"],
["Jeans.5360", "0", "0", "0", "0"],
["KillAll.2076", "0", "0", "0", "0"],
["RevenantAlex.3749", "0", "0", "0", "0"],
["Anaxa.8423", "0", "0", "0", "0"],
["Max Critts.4620", "1", "1", "1", "1"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["10/02/2025 22:14:20"]],		
	
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


