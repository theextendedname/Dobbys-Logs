new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "2", "11", "9"],
["theextendedname.4879", "5", "5", "16", "14"],
["Batercus.6257", "3", "1", "9", "4"],
["Bloop.2831", "4", "4", "13", "13"],
["virtual.3879", "0", "0", "0", "0"],
["Soushi.5132", "3", "0", "10", "0"],
["Berticus.8167", "1", "1", "1", "1"],
["Talcos.9723", "0", "0", "3", "2"],
["Gambit.8512", "0", "0", "1", "0"],
["Tarmogobs.7186", "2", "1", "6", "4"],
["Tien.4913", "2", "0", "4", "0"],
["sachaa.8706", "4", "0", "11", "1"],
["DaragangMagayon.1795", "2", "0", "6", "0"],
["Raijin.8452", "0", "0", "3", "0"],
["SayuriXY.2593", "2", "1", "7", "2"],
["Kodes.5784", "4", "4", "11", "10"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "1", "1", "1", "1"],
["Suricatta.1029", "1", "1", "4", "4"],
["amrtime.2150", "0", "0", "0", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["Ganix.1957", "5", "5", "14", "14"],
["morsel.4670", "5", "5", "16", "16"],
["DaBMz.5724", "2", "2", "8", "6"],
["LiLMochaJoe.7456", "3", "3", "12", "10"],
["Adesso e Fortuna.4085", "0", "0", "0", "0"],
["Lhew.1904", "2", "2", "2", "2"],
["Kharashadora.9043", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["KrimsonWolf.6781", "3", "3", "5", "5"],
["Luetenant.3178", "0", "0", "3", "0"],
["Zugare.9032", "1", "1", "2", "2"],
["Maleficpanda.8350", "2", "0", "3", "0"],
["Beer Meister.5938", "0", "0", "0", "0"],
["Singe.6103", "0", "0", "0", "0"],
["Spades.2603", "0", "0", "2", "0"],
["PolarBear.5836", "0", "0", "0", "0"],
["Grootella.1270", "0", "0", "6", "5"],
["Arkanus.5304", "3", "2", "8", "6"],
["Meen.2467", "3", "2", "8", "6"],
["ItIsAllAboutCake.6125", "5", "4", "13", "10"],
["Ayemes.5892", "1", "0", "1", "0"],
["gferreira.1862", "1", "0", "4", "2"],
["Ryulightorb.8407", "0", "0", "2", "2"],
["eirka.1892", "1", "1", "4", "4"],
["DanDizh.8416", "0", "0", "0", "0"],
["Nexle.8320", "2", "1", "9", "5"],
["Calgari.8671", "1", "0", "6", "3"],
["Banchou.5628", "5", "5", "16", "14"],
["Biot.7201", "3", "3", "10", "7"],
["Sef.7382", "0", "0", "2", "0"],
["IamXillah.2153", "0", "0", "0", "0"],
["Shrimpsanity.2107", "1", "1", "4", "2"],
["Kalen Keywarden.4356", "0", "0", "0", "0"],
["Hikaro.1743", "2", "0", "2", "0"],
["TechnoTK.6498", "0", "0", "1", "1"],
["Mori.8729", "1", "0", "7", "0"],
["Swagasarus.6150", "2", "1", "6", "3"],
["Icy Violin.9213", "1", "0", "3", "0"],
["takamina.9784", "2", "2", "10", "6"],
["Dirddle.8524", "5", "1", "13", "8"],
["Stay Alive.2917", "2", "2", "11", "7"],
["mrhnwt.9084", "4", "4", "10", "10"],
["Adiduh.9785", "0", "0", "0", "0"],
["juniippurr.9521", "5", "5", "13", "13"],
["rawrking.1958", "3", "2", "3", "2"],
["Beecher Hyde.9023", "2", "0", "4", "0"],
["MONI.6195", "1", "0", "3", "0"],
["Ambroise Diggs.5692", "1", "1", "1", "1"],
["Chapchap.6107", "2", "2", "5", "4"],
["BugTheDebugger.2465", "2", "0", "2", "0"],
["TooFee.3196", "3", "0", "7", "0"],
["Quercus helvetica.6093", "2", "1", "4", "2"],
["Titan.1784", "0", "0", "0", "0"],
["Crixfal.7452", "0", "0", "1", "0"],
["Oshamaya.6195", "2", "0", "3", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["09/13/2025 10:11:59"]],		
	
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


