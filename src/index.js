new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "0", "0", "9", "7"],
["theextendedname.4879", "4", "4", "18", "18"],
["Batercus.6257", "2", "2", "13", "6"],
["Bloop.2831", "4", "3", "16", "15"],
["virtual.3879", "1", "0", "5", "0"],
["Soushi.5132", "1", "0", "8", "0"],
["Berticus.8167", "0", "0", "1", "1"],
["Talcos.9723", "0", "0", "3", "3"],
["Tarmogobs.7186", "2", "1", "11", "5"],
["Tien.4913", "3", "1", "9", "1"],
["sachaa.8706", "2", "0", "10", "1"],
["DaragangMagayon.1795", "1", "0", "5", "0"],
["SayuriXY.2593", "1", "0", "5", "1"],
["Kodes.5784", "4", "4", "14", "13"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "3", "1", "9", "3"],
["Suricatta.1029", "1", "1", "5", "5"],
["JCthirteen.1985", "1", "0", "2", "0"],
["Ganix.1957", "4", "4", "18", "17"],
["morsel.4670", "4", "4", "18", "18"],
["DaBMz.5724", "2", "2", "8", "8"],
["LiLMochaJoe.7456", "2", "2", "11", "10"],
["Lhew.1904", "1", "1", "7", "7"],
["Kharashadora.9043", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["KrimsonWolf.6781", "1", "1", "7", "7"],
["Luetenant.3178", "1", "0", "3", "0"],
["Zugare.9032", "0", "0", "2", "2"],
["Maleficpanda.8350", "0", "0", "4", "2"],
["Beer Meister.5938", "1", "0", "1", "0"],
["Spades.2603", "0", "0", "0", "0"],
["Grootella.1270", "1", "0", "4", "2"],
["Arkanus.5304", "0", "0", "3", "2"],
["Meen.2467", "4", "3", "16", "12"],
["ItIsAllAboutCake.6125", "4", "4", "18", "17"],
["gferreira.1862", "2", "1", "5", "1"],
["Ryulightorb.8407", "0", "0", "1", "0"],
["eirka.1892", "1", "1", "4", "3"],
["Nexle.8320", "2", "0", "7", "2"],
["Calgari.8671", "0", "0", "5", "2"],
["Banchou.5628", "4", "4", "17", "15"],
["Biot.7201", "2", "0", "7", "4"],
["Shrimpsanity.2107", "0", "0", "2", "2"],
["Hikaro.1743", "1", "0", "8", "0"],
["TechnoTK.6498", "0", "0", "2", "1"],
["Mori.8729", "3", "0", "7", "0"],
["Swagasarus.6150", "3", "2", "7", "3"],
["Icy Violin.9213", "0", "0", "2", "0"],
["takamina.9784", "0", "0", "3", "2"],
["Dirddle.8524", "3", "1", "13", "4"],
["Stay Alive.2917", "1", "1", "12", "10"],
["mrhnwt.9084", "3", "3", "12", "12"],
["juniippurr.9521", "2", "2", "16", "16"],
["rawrking.1958", "0", "0", "8", "3"],
["Beecher Hyde.9023", "2", "0", "7", "0"],
["MONI.6195", "1", "0", "5", "0"],
["Ambroise Diggs.5692", "1", "1", "2", "2"],
["Chapchap.6107", "0", "0", "6", "6"],
["BugTheDebugger.2465", "0", "0", "4", "0"],
["Quercus helvetica.6093", "2", "0", "6", "2"],
["Titan.1784", "0", "0", "3", "0"],
["Crixfal.7452", "0", "0", "1", "0"],
["Oshamaya.6195", "0", "0", "6", "0"],
["Escaflow.5407", "0", "0", "0", "0"],
["Obisaurus.8960", "3", "3", "7", "4"],
["MysticVetSock.4078", "0", "0", "0", "0"],
["kodo.4087", "1", "1", "5", "2"],
["Jeans.5360", "0", "0", "0", "0"],
["KillAll.2076", "0", "0", "0", "0"],
["RevenantAlex.3749", "0", "0", "0", "0"],
["Anaxa.8423", "0", "0", "0", "0"],
["Max Critts.4620", "2", "2", "2", "2"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["10/04/2025 10:13:26"]],		
	
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


