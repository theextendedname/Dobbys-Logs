new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "3", "12", "10"],
["theextendedname.4879", "5", "5", "16", "14"],
["Batercus.6257", "3", "1", "8", "3"],
["Bloop.2831", "4", "4", "13", "13"],
["virtual.3879", "1", "0", "1", "0"],
["Soushi.5132", "4", "0", "11", "0"],
["Berticus.8167", "1", "1", "1", "1"],
["Talcos.9723", "0", "0", "3", "2"],
["Gambit.8512", "0", "0", "1", "0"],
["Tarmogobs.7186", "2", "1", "6", "4"],
["Tien.4913", "2", "0", "4", "0"],
["sachaa.8706", "4", "0", "11", "1"],
["DaragangMagayon.1795", "3", "0", "7", "0"],
["Raijin.8452", "0", "0", "2", "0"],
["SayuriXY.2593", "3", "1", "8", "2"],
["Kodes.5784", "4", "4", "12", "11"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "2", "1", "2", "1"],
["Suricatta.1029", "1", "1", "3", "3"],
["amrtime.2150", "0", "0", "0", "0"],
["JCthirteen.1985", "0", "0", "0", "0"],
["Ganix.1957", "5", "5", "15", "15"],
["morsel.4670", "5", "5", "16", "16"],
["DaBMz.5724", "3", "3", "9", "7"],
["LiLMochaJoe.7456", "3", "3", "11", "10"],
["Adesso e Fortuna.4085", "0", "0", "0", "0"],
["Lhew.1904", "2", "2", "2", "2"],
["Kharashadora.9043", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["Gale.8390", "0", "0", "0", "0"],
["KrimsonWolf.6781", "3", "3", "4", "4"],
["Luetenant.3178", "0", "0", "3", "0"],
["Zugare.9032", "1", "1", "2", "2"],
["Maleficpanda.8350", "2", "0", "3", "0"],
["Beer Meister.5938", "0", "0", "0", "0"],
["Singe.6103", "0", "0", "0", "0"],
["Spades.2603", "0", "0", "2", "0"],
["PolarBear.5836", "0", "0", "0", "0"],
["Grootella.1270", "0", "0", "5", "4"],
["Arkanus.5304", "2", "1", "7", "5"],
["Meen.2467", "3", "2", "8", "6"],
["ItIsAllAboutCake.6125", "5", "4", "13", "11"],
["Ayemes.5892", "1", "0", "1", "0"],
["gferreira.1862", "2", "0", "5", "2"],
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
["Swagasarus.6150", "3", "1", "7", "3"],
["Icy Violin.9213", "1", "0", "3", "0"],
["takamina.9784", "1", "1", "9", "6"],
["Dirddle.8524", "4", "1", "12", "7"],
["Stay Alive.2917", "2", "2", "10", "7"],
["mrhnwt.9084", "4", "4", "11", "11"],
["Adiduh.9785", "0", "0", "0", "0"],
["juniippurr.9521", "5", "5", "13", "13"],
["rawrking.1958", "3", "2", "3", "2"],
["Beecher Hyde.9023", "1", "0", "4", "0"],
["MONI.6195", "2", "0", "4", "0"],
["Ambroise Diggs.5692", "1", "1", "1", "1"],
["Chapchap.6107", "2", "2", "5", "4"],
["BugTheDebugger.2465", "2", "0", "3", "0"],
["TooFee.3196", "3", "0", "8", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["09/14/2025 10:13:58"]],		
	
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


