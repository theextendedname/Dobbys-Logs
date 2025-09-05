new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "3", "8", "7"],
["theextendedname.4879", "4", "3", "17", "15"],
["Batercus.6257", "4", "2", "10", "5"],
["Bloop.2831", "2", "2", "15", "15"],
["virtual.3879", "0", "0", "0", "0"],
["Soushi.5132", "2", "0", "9", "0"],
["Berticus.8167", "0", "0", "0", "0"],
["Talcos.9723", "3", "2", "4", "3"],
["Gambit.8512", "0", "0", "1", "0"],
["Tarmogobs.7186", "4", "3", "4", "3"],
["Tien.4913", "1", "0", "2", "0"],
["sachaa.8706", "2", "1", "8", "2"],
["DaragangMagayon.1795", "0", "0", "6", "0"],
["Raijin.8452", "1", "0", "4", "0"],
["SayuriXY.2593", "1", "0", "5", "1"],
["Kodes.5784", "1", "1", "11", "10"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "0", "0", "0", "0"],
["Suricatta.1029", "2", "2", "4", "4"],
["amrtime.2150", "0", "0", "1", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["Ganix.1957", "4", "4", "15", "14"],
["morsel.4670", "4", "4", "17", "16"],
["DaBMz.5724", "3", "3", "6", "4"],
["LiLMochaJoe.7456", "4", "4", "13", "8"],
["Adesso e Fortuna.4085", "0", "0", "0", "0"],
["Lhew.1904", "0", "0", "0", "0"],
["Kharashadora.9043", "0", "0", "2", "0"],
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
["Grootella.1270", "3", "3", "10", "9"],
["Arkanus.5304", "1", "1", "9", "8"],
["Meen.2467", "3", "3", "7", "5"],
["ItIsAllAboutCake.6125", "2", "2", "13", "10"],
["Ayemes.5892", "0", "0", "0", "0"],
["gferreira.1862", "0", "0", "4", "3"],
["Ryulightorb.8407", "0", "0", "2", "2"],
["eirka.1892", "3", "3", "3", "3"],
["DanDizh.8416", "0", "0", "0", "0"],
["Nexle.8320", "1", "0", "10", "7"],
["Calgari.8671", "2", "1", "5", "3"],
["Banchou.5628", "4", "4", "15", "12"],
["Biot.7201", "4", "4", "9", "4"],
["Sef.7382", "0", "0", "2", "0"],
["IamXillah.2153", "0", "0", "0", "0"],
["Shrimpsanity.2107", "1", "0", "4", "2"],
["Kalen Keywarden.4356", "0", "0", "0", "0"],
["Hikaro.1743", "0", "0", "0", "0"],
["TechnoTK.6498", "1", "1", "3", "3"],
["Mori.8729", "1", "0", "7", "0"],
["Swagasarus.6150", "0", "0", "8", "3"],
["Icy Violin.9213", "2", "0", "3", "0"],
["takamina.9784", "2", "0", "12", "8"],
["Dirddle.8524", "2", "1", "13", "10"],
["Stay Alive.2917", "4", "3", "14", "9"],
["mrhnwt.9084", "1", "1", "10", "10"],
["Adiduh.9785", "0", "0", "3", "1"],
["juniippurr.9521", "3", "3", "12", "12"],
["rawrking.1958", "0", "0", "0", "0"],
["Beecher Hyde.9023", "1", "0", "2", "0"],
["MONI.6195", "1", "0", "2", "0"],
["Ambroise Diggs.5692", "0", "0", "0", "0"],
["Chapchap.6107", "3", "2", "3", "2"],
["BugTheDebugger.2465", "0", "0", "0", "0"],
["TooFee.3196", "2", "0", "4", "0"],
["Quercus helvetica.6093", "1", "1", "2", "1"],
["Titan.1784", "0", "0", "0", "0"],
["Crixfal.7452", "1", "0", "1", "0"],
["Oshamaya.6195", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["09/04/2025 22:11:04"]],		
	
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


