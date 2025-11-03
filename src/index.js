new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "2", "4", "3"],
["theextendedname.4879", "3", "3", "11", "11"],
["Batercus.6257", "2", "1", "6", "3"],
["Bloop.2831", "3", "3", "11", "10"],
["Soushi.5132", "2", "0", "5", "0"],
["Talcos.9723", "0", "0", "0", "0"],
["Tarmogobs.7186", "2", "2", "5", "4"],
["Oshamaya.6195", "2", "0", "4", "0"],
["KillAll.2076", "0", "0", "0", "0"],
["Tien.4913", "3", "0", "8", "0"],
["phaneo.3197", "0", "0", "0", "0"],
["Georgiou.4618", "2", "1", "6", "1"],
["sachaa.8706", "3", "0", "6", "1"],
["DaragangMagayon.1795", "1", "0", "4", "0"],
["Obisaurus.8960", "3", "0", "9", "6"],
["SayuriXY.2593", "1", "0", "3", "0"],
["Crixfal.7452", "0", "0", "0", "0"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "2", "1", "6", "2"],
["Suricatta.1029", "1", "1", "3", "3"],
["JCthirteen.1985", "0", "0", "0", "0"],
["rawrking.1958", "0", "0", "0", "0"],
["Ganix.1957", "2", "2", "10", "10"],
["morsel.4670", "3", "3", "10", "10"],
["Chapchap.6107", "1", "1", "1", "1"],
["DaBMz.5724", "2", "1", "3", "2"],
["LiLMochaJoe.7456", "2", "2", "6", "5"],
["Lhew.1904", "1", "1", "4", "4"],
["Kharashadora.9043", "1", "0", "1", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["KrimsonWolf.6781", "1", "1", "3", "3"],
["Luetenant.3178", "2", "0", "6", "0"],
["Zugare.9032", "0", "0", "0", "0"],
["Maleficpanda.8350", "1", "0", "1", "0"],
["Xeerot.7418", "3", "0", "6", "0"],
["Spades.2603", "0", "0", "0", "0"],
["Grootella.1270", "1", "1", "4", "4"],
["Meen.2467", "3", "3", "11", "10"],
["blindwaves.7952", "0", "0", "0", "0"],
["ItIsAllAboutCake.6125", "3", "3", "11", "11"],
["Anaxa.8423", "0", "0", "0", "0"],
["gferreira.1862", "1", "1", "3", "2"],
["Mogarc.2173", "0", "0", "0", "0"],
["Ryulightorb.8407", "0", "0", "0", "0"],
["eirka.1892", "1", "1", "3", "3"],
["Nexle.8320", "2", "2", "6", "5"],
["Calgari.8671", "1", "1", "2", "2"],
["Banchou.5628", "3", "3", "8", "8"],
["Biot.7201", "2", "0", "6", "4"],
["Quercus helvetica.6093", "1", "0", "4", "3"],
["Max Critts.4620", "1", "0", "6", "4"],
["Escaflow.5407", "2", "1", "2", "1"],
["Shrimpsanity.2107", "1", "0", "1", "0"],
["Hikaro.1743", "1", "0", "3", "0"],
["kodo.4087", "2", "1", "5", "4"],
["TechnoTK.6498", "0", "0", "0", "0"],
["RevenantAlex.3749", "2", "2", "5", "5"],
["MONI.6195", "0", "0", "4", "0"],
["Mori.8729", "2", "0", "6", "0"],
["Swagasarus.6150", "2", "0", "3", "0"],
["Icy Violin.9213", "0", "0", "0", "0"],
["takamina.9784", "1", "0", "1", "0"],
["Dirddle.8524", "3", "2", "9", "5"],
["Stay Alive.2917", "2", "2", "5", "5"],
["mrhnwt.9084", "2", "2", "7", "7"],
["Itzal.9743", "2", "0", "5", "0"],
["juniippurr.9521", "2", "2", "7", "7"],
["XtremeOne.4729", "0", "0", "0", "0"],
["Classic GD.5872", "1", "0", "1", "0"],
["Gigglegasm.2174", "2", "1", "2", "1"],
["booogsss.7048", "1", "0", "1", "0"],
["Ambroise Diggs.5692", "1", "1", "2", "2"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["11/02/2025 22:13:25"]],		
	
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


