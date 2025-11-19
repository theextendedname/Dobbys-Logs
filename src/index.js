new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "3", "9", "8"],
["theextendedname.4879", "5", "5", "15", "15"],
["Batercus.6257", "4", "1", "13", "5"],
["Bloop.2831", "5", "5", "15", "13"],
["Soushi.5132", "1", "0", "6", "0"],
["Talcos.9723", "0", "0", "0", "0"],
["Tarmogobs.7186", "1", "1", "7", "6"],
["Oshamaya.6195", "0", "0", "5", "0"],
["KillAll.2076", "0", "0", "0", "0"],
["phaneo.3197", "4", "1", "5", "1"],
["Georgiou.4618", "3", "1", "9", "2"],
["sachaa.8706", "4", "2", "11", "3"],
["DaragangMagayon.1795", "1", "0", "5", "0"],
["Obisaurus.8960", "4", "2", "12", "7"],
["SayuriXY.2593", "3", "0", "5", "0"],
["Crixfal.7452", "0", "0", "0", "0"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "2", "0", "10", "3"],
["Suricatta.1029", "2", "2", "5", "5"],
["JCthirteen.1985", "0", "0", "0", "0"],
["rawrking.1958", "0", "0", "0", "0"],
["Ganix.1957", "5", "5", "14", "14"],
["morsel.4670", "5", "5", "14", "14"],
["Chapchap.6107", "1", "0", "3", "2"],
["DaBMz.5724", "2", "2", "7", "6"],
["LiLMochaJoe.7456", "4", "3", "13", "11"],
["Lhew.1904", "1", "1", "6", "6"],
["Kharashadora.9043", "0", "0", "1", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["KrimsonWolf.6781", "1", "1", "5", "5"],
["Luetenant.3178", "1", "0", "5", "0"],
["Zugare.9032", "0", "0", "0", "0"],
["Maleficpanda.8350", "0", "0", "1", "0"],
["Xeerot.7418", "4", "3", "13", "3"],
["Spades.2603", "0", "0", "0", "0"],
["Grootella.1270", "2", "2", "7", "7"],
["Meen.2467", "5", "3", "15", "12"],
["blindwaves.7952", "3", "2", "5", "4"],
["ItIsAllAboutCake.6125", "5", "4", "15", "13"],
["Anaxa.8423", "0", "0", "0", "0"],
["gferreira.1862", "1", "1", "4", "3"],
["Mogarc.2173", "0", "0", "0", "0"],
["Ryulightorb.8407", "0", "0", "0", "0"],
["eirka.1892", "1", "1", "5", "3"],
["Nexle.8320", "2", "0", "9", "5"],
["Calgari.8671", "0", "0", "2", "2"],
["Banchou.5628", "4", "4", "13", "10"],
["Biot.7201", "3", "0", "11", "3"],
["Quercus helvetica.6093", "1", "1", "5", "4"],
["Max Critts.4620", "4", "3", "8", "6"],
["Escaflow.5407", "0", "0", "2", "1"],
["Shrimpsanity.2107", "0", "0", "1", "0"],
["Hikaro.1743", "3", "0", "8", "0"],
["kodo.4087", "2", "2", "10", "9"],
["TechnoTK.6498", "0", "0", "0", "0"],
["RevenantAlex.3749", "2", "2", "10", "10"],
["MONI.6195", "0", "0", "2", "0"],
["Mori.8729", "1", "0", "6", "0"],
["Swagasarus.6150", "2", "1", "6", "2"],
["Icy Violin.9213", "0", "0", "0", "0"],
["takamina.9784", "1", "0", "3", "0"],
["Dirddle.8524", "3", "2", "13", "7"],
["Stay Alive.2917", "3", "1", "10", "8"],
["mrhnwt.9084", "0", "0", "3", "3"],
["Itzal.9743", "2", "0", "9", "0"],
["juniippurr.9521", "4", "3", "12", "11"],
["XtremeOne.4729", "1", "0", "1", "0"],
["Classic GD.5872", "0", "0", "2", "0"],
["Gigglegasm.2174", "2", "1", "6", "4"],
["booogsss.7048", "1", "0", "5", "0"],
["Ambroise Diggs.5692", "1", "1", "4", "4"],
["zStadust.9640", "0", "0", "0", "0"],
["Mandaragit.7069", "0", "0", "0", "0"],
["IllusionProtocol.7519", "0", "0", "0", "0"],
["IIRyanII.8135", "2", "1", "3", "1"],
["LeeroyLam.3274", "3", "0", "3", "0"],
["Autumn.5910", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["11/18/2025 10:28:08"]],		
	
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


