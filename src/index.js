new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "1", "10", "8"],
["theextendedname.4879", "5", "5", "17", "17"],
["Batercus.6257", "3", "1", "13", "4"],
["Bloop.2831", "5", "5", "14", "14"],
["virtual.3879", "3", "0", "4", "0"],
["Soushi.5132", "2", "0", "9", "0"],
["Berticus.8167", "0", "0", "1", "1"],
["Talcos.9723", "1", "1", "4", "3"],
["Tarmogobs.7186", "3", "0", "11", "6"],
["Tien.4913", "3", "0", "7", "0"],
["sachaa.8706", "3", "1", "11", "2"],
["DaragangMagayon.1795", "1", "0", "4", "0"],
["SayuriXY.2593", "0", "0", "5", "1"],
["Kodes.5784", "5", "4", "12", "11"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "4", "1", "6", "2"],
["Suricatta.1029", "1", "1", "4", "4"],
["JCthirteen.1985", "0", "0", "1", "0"],
["Ganix.1957", "5", "5", "17", "16"],
["morsel.4670", "5", "5", "17", "17"],
["DaBMz.5724", "3", "3", "9", "9"],
["LiLMochaJoe.7456", "3", "2", "11", "10"],
["Lhew.1904", "2", "2", "6", "6"],
["Kharashadora.9043", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["KrimsonWolf.6781", "1", "1", "6", "6"],
["Luetenant.3178", "1", "0", "2", "0"],
["Zugare.9032", "1", "1", "3", "3"],
["Maleficpanda.8350", "0", "0", "4", "2"],
["Beer Meister.5938", "0", "0", "0", "0"],
["Spades.2603", "0", "0", "2", "0"],
["Grootella.1270", "2", "1", "4", "3"],
["Arkanus.5304", "0", "0", "4", "3"],
["Meen.2467", "5", "4", "14", "11"],
["ItIsAllAboutCake.6125", "5", "5", "15", "14"],
["gferreira.1862", "2", "1", "4", "1"],
["Ryulightorb.8407", "1", "0", "1", "0"],
["eirka.1892", "0", "0", "4", "3"],
["Nexle.8320", "3", "0", "7", "2"],
["Calgari.8671", "1", "1", "6", "3"],
["Banchou.5628", "4", "2", "16", "14"],
["Biot.7201", "1", "0", "7", "6"],
["Shrimpsanity.2107", "0", "0", "3", "2"],
["Hikaro.1743", "2", "0", "7", "0"],
["TechnoTK.6498", "0", "0", "2", "1"],
["Mori.8729", "2", "0", "6", "0"],
["Swagasarus.6150", "2", "1", "5", "2"],
["Icy Violin.9213", "0", "0", "2", "0"],
["takamina.9784", "0", "0", "4", "2"],
["Dirddle.8524", "3", "1", "10", "3"],
["Stay Alive.2917", "4", "2", "13", "11"],
["mrhnwt.9084", "3", "3", "11", "11"],
["juniippurr.9521", "5", "5", "16", "16"],
["rawrking.1958", "3", "1", "8", "3"],
["Beecher Hyde.9023", "3", "0", "6", "0"],
["MONI.6195", "1", "0", "5", "0"],
["Ambroise Diggs.5692", "0", "0", "1", "1"],
["Chapchap.6107", "1", "1", "7", "7"],
["BugTheDebugger.2465", "0", "0", "4", "0"],
["Quercus helvetica.6093", "2", "1", "6", "3"],
["Titan.1784", "2", "0", "3", "0"],
["Crixfal.7452", "0", "0", "2", "0"],
["Oshamaya.6195", "2", "0", "7", "0"],
["Escaflow.5407", "0", "0", "0", "0"],
["Mystic Vet.2317", "0", "0", "1", "0"],
["Obisaurus.8960", "4", "2", "5", "2"],
["kodo.4087", "2", "1", "4", "1"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["09/28/2025 10:10:51"]],		
	
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


