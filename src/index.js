new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "3", "3", "4", "4"],
["theextendedname.4879", "3", "3", "4", "4"],
["Batercus.6257", "3", "3", "4", "4"],
["Alohra.3690", "0", "0", "0", "0"],
["Hatu.4823", "0", "0", "0", "0"],
["Nigredo.2674", "1", "0", "1", "0"],
["TreePoke.9057", "2", "2", "3", "3"],
["Adriatic.5790", "0", "0", "0", "0"],
["Red.6531", "0", "0", "0", "0"],
["KDG.1069", "0", "0", "0", "0"],
["Sparxs.7583", "0", "0", "0", "0"],
["Suricatta.1029", "1", "1", "2", "2"],
["morsel.4670", "3", "1", "3", "1"],
["LiLMochaJoe.7456", "2", "2", "3", "2"],
["MoleRat.9432", "0", "0", "0", "0"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "3", "2", "4", "3"],
["KuidProKuo.9380", "1", "0", "1", "0"],
["Limoncello.9201", "1", "1", "2", "2"],
["cmdrpengu.3012", "1", "1", "2", "2"],
["ItIsAllAboutCake.6125", "3", "3", "4", "4"],
["Calgari.8671", "1", "0", "1", "0"],
["Biot.7201", "3", "3", "4", "4"],
["Nakyo.2710", "0", "0", "0", "0"],
["Ity.3504", "1", "0", "2", "0"],
["Hikaro.1743", "3", "2", "4", "2"],
["TechnoTK.6498", "2", "1", "2", "1"],
["ToraKalani.7985", "2", "0", "3", "1"],
["Lompy.4613", "1", "1", "1", "1"],
["shmootsu.3678", "0", "0", "0", "0"],
["Maru.4726", "0", "0", "1", "1"],
["XtremeOne.4729", "0", "0", "0", "0"],
["mimi.9480", "0", "0", "0", "0"],
["ANN T UPP.5278", "1", "0", "2", "0"],
["minimesmith.2860", "0", "0", "0", "0"],
["Kisuko.6872", "2", "0", "3", "0"],
["Wahrheit.2095", "0", "0", "0", "0"],
["Grootella.1270", "2", "2", "3", "3"],
["Anhuur.2501", "1", "0", "1", "0"],
["Amycfp.8276", "0", "0", "0", "0"],
["Dirddle.8524", "0", "0", "0", "0"],
["Stay Alive.2917", "0", "0", "0", "0"],
["GrimReaper.8270", "0", "0", "0", "0"],
["Horiksson.3410", "0", "0", "0", "0"],
["mastergaze.8247", "2", "2", "3", "3"],
["Riddah.3201", "3", "2", "4", "2"],
["Bloop.2831", "1", "0", "2", "0"],
["sadmantha.6841", "1", "1", "1", "1"],
["Lhew.1904", "3", "2", "4", "3"],
["Mori.8729", "1", "1", "1", "1"],
["TonySu.2608", "1", "1", "2", "2"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["01/17/2025 23:43:21"]],		
	
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


