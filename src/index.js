new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "1", "5", "3"],
["theextendedname.4879", "3", "3", "14", "14"],
["Batercus.6257", "1", "1", "8", "5"],
["Bloop.2831", "3", "3", "13", "12"],
["virtual.3879", "0", "0", "4", "0"],
["Soushi.5132", "1", "0", "5", "0"],
["Berticus.8167", "0", "0", "0", "0"],
["Talcos.9723", "0", "0", "2", "2"],
["Tarmogobs.7186", "1", "0", "7", "2"],
["Oshamaya.6195", "1", "0", "4", "0"],
["Jeans.5360", "0", "0", "0", "0"],
["KillAll.2076", "0", "0", "0", "0"],
["Tien.4913", "1", "0", "7", "1"],
["MysticVetSock.4078", "0", "0", "0", "0"],
["Georgiou.4618", "2", "0", "2", "0"],
["sachaa.8706", "2", "1", "7", "2"],
["DaragangMagayon.1795", "1", "0", "3", "0"],
["Obisaurus.8960", "2", "2", "10", "7"],
["SayuriXY.2593", "0", "0", "1", "0"],
["TheGamingNP.3068", "2", "0", "2", "0"],
["Kodes.5784", "2", "2", "11", "10"],
["Crixfal.7452", "0", "0", "0", "0"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "0", "0", "7", "2"],
["Suricatta.1029", "1", "1", "4", "4"],
["JCthirteen.1985", "0", "0", "2", "0"],
["rawrking.1958", "0", "0", "4", "1"],
["Ganix.1957", "3", "3", "14", "13"],
["morsel.4670", "3", "3", "14", "14"],
["Chapchap.6107", "0", "0", "1", "1"],
["Ambroise Diggs.5692", "0", "0", "1", "1"],
["DaBMz.5724", "0", "0", "4", "4"],
["LiLMochaJoe.7456", "1", "0", "7", "5"],
["Cossack.3092", "1", "0", "1", "0"],
["Lhew.1904", "1", "1", "5", "5"],
["Kharashadora.9043", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["KrimsonWolf.6781", "0", "0", "3", "3"],
["Luetenant.3178", "1", "0", "4", "0"],
["Zugare.9032", "0", "0", "1", "1"],
["Maleficpanda.8350", "0", "0", "0", "0"],
["Beer Meister.5938", "0", "0", "1", "0"],
["Xeerot.7418", "1", "0", "1", "0"],
["Spades.2603", "0", "0", "0", "0"],
["Grootella.1270", "1", "1", "4", "2"],
["Arkanus.5304", "0", "0", "0", "0"],
["Meen.2467", "3", "2", "14", "11"],
["blindwaves.7952", "0", "0", "0", "0"],
["ItIsAllAboutCake.6125", "3", "3", "14", "14"],
["Anaxa.8423", "0", "0", "0", "0"],
["gferreira.1862", "0", "0", "3", "1"],
["Inflikted.1936", "0", "0", "0", "0"],
["Mogarc.2173", "0", "0", "0", "0"],
["Ryulightorb.8407", "0", "0", "1", "0"],
["eirka.1892", "1", "1", "3", "2"],
["Nexle.8320", "1", "1", "7", "2"],
["Calgari.8671", "0", "0", "2", "1"],
["Banchou.5628", "2", "2", "11", "9"],
["Biot.7201", "1", "1", "4", "1"],
["Quercus helvetica.6093", "1", "1", "4", "2"],
["Max Critts.4620", "2", "1", "5", "4"],
["Escaflow.5407", "0", "0", "0", "0"],
["Shrimpsanity.2107", "0", "0", "0", "0"],
["Hikaro.1743", "0", "0", "4", "0"],
["kodo.4087", "0", "0", "4", "2"],
["TechnoTK.6498", "0", "0", "1", "0"],
["RevenantAlex.3749", "0", "0", "0", "0"],
["MONI.6195", "1", "0", "4", "0"],
["Mori.8729", "1", "0", "7", "0"],
["Swagasarus.6150", "0", "0", "4", "2"],
["Icy Violin.9213", "0", "0", "0", "0"],
["takamina.9784", "0", "0", "0", "0"],
["Dirddle.8524", "2", "1", "9", "3"],
["Stay Alive.2917", "1", "1", "8", "6"],
["Titan.1784", "0", "0", "3", "0"],
["mrhnwt.9084", "2", "2", "9", "9"],
["Itzal.9743", "1", "0", "1", "0"],
["juniippurr.9521", "2", "2", "10", "10"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["10/18/2025 10:30:43"]],		
	
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


