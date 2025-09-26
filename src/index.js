new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "2", "11", "9"],
["theextendedname.4879", "5", "5", "16", "15"],
["Batercus.6257", "5", "2", "14", "5"],
["Bloop.2831", "4", "4", "12", "12"],
["virtual.3879", "2", "0", "3", "0"],
["Soushi.5132", "3", "0", "9", "0"],
["Berticus.8167", "0", "0", "1", "1"],
["Talcos.9723", "2", "2", "5", "4"],
["Tarmogobs.7186", "4", "1", "12", "7"],
["Tien.4913", "2", "0", "6", "0"],
["sachaa.8706", "2", "0", "9", "1"],
["DaragangMagayon.1795", "1", "0", "4", "0"],
["SayuriXY.2593", "0", "0", "5", "1"],
["Kodes.5784", "3", "2", "10", "9"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "3", "1", "5", "2"],
["Suricatta.1029", "2", "2", "5", "5"],
["JCthirteen.1985", "1", "0", "1", "0"],
["Ganix.1957", "5", "4", "16", "15"],
["morsel.4670", "5", "5", "16", "16"],
["DaBMz.5724", "1", "1", "8", "8"],
["LiLMochaJoe.7456", "4", "3", "12", "11"],
["Lhew.1904", "3", "3", "6", "6"],
["Kharashadora.9043", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["KrimsonWolf.6781", "2", "2", "7", "7"],
["Luetenant.3178", "2", "0", "2", "0"],
["Zugare.9032", "1", "1", "3", "3"],
["Maleficpanda.8350", "0", "0", "4", "2"],
["Beer Meister.5938", "0", "0", "0", "0"],
["Spades.2603", "0", "0", "2", "0"],
["Grootella.1270", "2", "1", "5", "4"],
["Arkanus.5304", "0", "0", "4", "3"],
["Meen.2467", "5", "4", "13", "10"],
["ItIsAllAboutCake.6125", "5", "5", "14", "13"],
["gferreira.1862", "1", "0", "3", "0"],
["Ryulightorb.8407", "1", "0", "1", "0"],
["eirka.1892", "1", "0", "5", "4"],
["Nexle.8320", "3", "1", "6", "2"],
["Calgari.8671", "2", "1", "6", "3"],
["Banchou.5628", "5", "3", "16", "14"],
["Biot.7201", "1", "0", "8", "7"],
["Shrimpsanity.2107", "0", "0", "3", "2"],
["Hikaro.1743", "3", "0", "7", "0"],
["TechnoTK.6498", "1", "0", "2", "1"],
["Mori.8729", "2", "0", "5", "0"],
["Swagasarus.6150", "1", "0", "4", "1"],
["Icy Violin.9213", "0", "0", "3", "0"],
["takamina.9784", "0", "0", "4", "2"],
["Dirddle.8524", "4", "1", "11", "3"],
["Stay Alive.2917", "5", "3", "13", "10"],
["mrhnwt.9084", "3", "3", "10", "10"],
["juniippurr.9521", "5", "5", "15", "15"],
["rawrking.1958", "3", "0", "7", "2"],
["Beecher Hyde.9023", "2", "0", "5", "0"],
["MONI.6195", "2", "0", "5", "0"],
["Ambroise Diggs.5692", "0", "0", "1", "1"],
["Chapchap.6107", "1", "1", "8", "7"],
["BugTheDebugger.2465", "1", "0", "4", "0"],
["Quercus helvetica.6093", "1", "1", "5", "3"],
["Titan.1784", "3", "0", "3", "0"],
["Crixfal.7452", "0", "0", "2", "0"],
["Oshamaya.6195", "3", "0", "7", "0"],
["Escaflow.5407", "0", "0", "0", "0"],
["Mystic Vet.2317", "0", "0", "1", "0"],
["Obisaurus.8960", "3", "1", "3", "1"],
["kodo.4087", "3", "1", "4", "1"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["09/25/2025 22:14:43"]],		
	
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


