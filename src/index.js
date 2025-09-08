new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "4", "3", "10", "8"],
["theextendedname.4879", "5", "5", "17", "15"],
["Batercus.6257", "4", "1", "9", "4"],
["Bloop.2831", "4", "4", "15", "15"],
["virtual.3879", "0", "0", "0", "0"],
["Soushi.5132", "3", "0", "10", "0"],
["Berticus.8167", "0", "0", "0", "0"],
["Talcos.9723", "2", "1", "3", "2"],
["Gambit.8512", "0", "0", "1", "0"],
["Tarmogobs.7186", "4", "2", "5", "3"],
["Tien.4913", "2", "0", "3", "0"],
["sachaa.8706", "4", "1", "10", "2"],
["DaragangMagayon.1795", "1", "0", "7", "0"],
["Raijin.8452", "1", "0", "4", "0"],
["SayuriXY.2593", "2", "1", "6", "2"],
["Kodes.5784", "3", "3", "13", "12"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "0", "0", "0", "0"],
["Suricatta.1029", "1", "1", "3", "3"],
["amrtime.2150", "0", "0", "0", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["Ganix.1957", "5", "5", "15", "15"],
["morsel.4670", "5", "5", "17", "16"],
["DaBMz.5724", "2", "2", "6", "4"],
["LiLMochaJoe.7456", "4", "4", "12", "9"],
["Adesso e Fortuna.4085", "0", "0", "0", "0"],
["Lhew.1904", "1", "1", "1", "1"],
["Kharashadora.9043", "0", "0", "1", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["KrimsonWolf.6781", "1", "1", "4", "4"],
["Luetenant.3178", "0", "0", "3", "0"],
["Zugare.9032", "1", "1", "1", "1"],
["Maleficpanda.8350", "0", "0", "1", "0"],
["Beer Meister.5938", "0", "0", "0", "0"],
["Singe.6103", "0", "0", "0", "0"],
["Spades.2603", "2", "0", "2", "0"],
["PolarBear.5836", "0", "0", "0", "0"],
["Grootella.1270", "2", "2", "8", "7"],
["Arkanus.5304", "2", "2", "8", "7"],
["Meen.2467", "2", "2", "6", "4"],
["ItIsAllAboutCake.6125", "3", "3", "14", "12"],
["Ayemes.5892", "1", "0", "1", "0"],
["gferreira.1862", "1", "0", "5", "3"],
["Ryulightorb.8407", "0", "0", "2", "2"],
["eirka.1892", "2", "2", "3", "3"],
["DanDizh.8416", "0", "0", "0", "0"],
["Nexle.8320", "2", "1", "11", "8"],
["Calgari.8671", "3", "1", "6", "3"],
["Banchou.5628", "5", "5", "15", "12"],
["Biot.7201", "4", "4", "8", "5"],
["Sef.7382", "0", "0", "2", "0"],
["IamXillah.2153", "0", "0", "0", "0"],
["Shrimpsanity.2107", "2", "1", "5", "3"],
["Kalen Keywarden.4356", "0", "0", "0", "0"],
["Hikaro.1743", "1", "0", "1", "0"],
["TechnoTK.6498", "1", "1", "3", "3"],
["Mori.8729", "2", "0", "8", "0"],
["Swagasarus.6150", "1", "0", "8", "3"],
["Icy Violin.9213", "1", "0", "3", "0"],
["takamina.9784", "4", "2", "14", "10"],
["Dirddle.8524", "3", "1", "14", "10"],
["Stay Alive.2917", "3", "3", "12", "7"],
["mrhnwt.9084", "3", "3", "11", "11"],
["Adiduh.9785", "0", "0", "3", "1"],
["juniippurr.9521", "4", "4", "13", "13"],
["rawrking.1958", "1", "1", "1", "1"],
["Beecher Hyde.9023", "3", "0", "4", "0"],
["MONI.6195", "1", "0", "2", "0"],
["Ambroise Diggs.5692", "1", "1", "1", "1"],
["Chapchap.6107", "3", "3", "4", "3"],
["BugTheDebugger.2465", "2", "0", "2", "0"],
["TooFee.3196", "4", "0", "6", "0"],
["Quercus helvetica.6093", "2", "2", "3", "2"],
["Titan.1784", "0", "0", "0", "0"],
["Crixfal.7452", "1", "0", "1", "0"],
["Oshamaya.6195", "2", "0", "2", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["09/07/2025 22:02:30"]],		
	
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


