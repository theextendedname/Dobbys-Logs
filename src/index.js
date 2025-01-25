new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "2", "5", "5"],
["theextendedname.4879", "3", "3", "6", "6"],
["Batercus.6257", "3", "3", "6", "6"],
["Alohra.3690", "2", "2", "2", "2"],
["Hatu.4823", "0", "0", "0", "0"],
["Nigredo.2674", "0", "0", "1", "0"],
["TreePoke.9057", "2", "2", "4", "4"],
["Adriatic.5790", "0", "0", "0", "0"],
["Red.6531", "0", "0", "0", "0"],
["KDG.1069", "0", "0", "0", "0"],
["Sparxs.7583", "1", "1", "1", "1"],
["Suricatta.1029", "1", "1", "3", "3"],
["morsel.4670", "3", "2", "5", "2"],
["LiLMochaJoe.7456", "2", "2", "5", "4"],
["MoleRat.9432", "0", "0", "0", "0"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "3", "3", "6", "5"],
["KuidProKuo.9380", "0", "0", "1", "0"],
["Limoncello.9201", "1", "1", "3", "3"],
["cmdrpengu.3012", "1", "1", "3", "3"],
["ItIsAllAboutCake.6125", "3", "2", "6", "5"],
["Calgari.8671", "0", "0", "1", "0"],
["Biot.7201", "3", "3", "6", "6"],
["Nakyo.2710", "0", "0", "0", "0"],
["Ity.3504", "0", "0", "2", "0"],
["Hikaro.1743", "2", "1", "5", "2"],
["TechnoTK.6498", "2", "0", "3", "1"],
["ToraKalani.7985", "3", "2", "5", "3"],
["Lompy.4613", "0", "0", "1", "1"],
["shmootsu.3678", "1", "0", "1", "0"],
["Maru.4726", "0", "0", "1", "1"],
["XtremeOne.4729", "0", "0", "0", "0"],
["mimi.9480", "0", "0", "0", "0"],
["ANN T UPP.5278", "2", "0", "4", "0"],
["minimesmith.2860", "0", "0", "0", "0"],
["Kisuko.6872", "2", "0", "4", "0"],
["Wahrheit.2095", "0", "0", "0", "0"],
["Grootella.1270", "3", "3", "5", "5"],
["Anhuur.2501", "0", "0", "1", "0"],
["Amycfp.8276", "0", "0", "0", "0"],
["Dirddle.8524", "0", "0", "0", "0"],
["Stay Alive.2917", "0", "0", "0", "0"],
["GrimReaper.8270", "0", "0", "0", "0"],
["Horiksson.3410", "0", "0", "0", "0"],
["mastergaze.8247", "2", "2", "4", "4"],
["Riddah.3201", "2", "2", "5", "3"],
["Bloop.2831", "2", "0", "4", "0"],
["sadmantha.6841", "0", "0", "1", "1"],
["Lhew.1904", "2", "1", "5", "4"],
["Mori.8729", "0", "0", "1", "1"],
["TonySu.2608", "3", "2", "4", "3"],
["juniippurr.9521", "0", "0", "0", "0"],
["Karma.8754", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["01/24/2025 23:02:12"]],		
	
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


