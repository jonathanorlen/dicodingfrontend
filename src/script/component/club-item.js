class ClubItem extends HTMLElement{
     constructor(){
          super();
          this.shadowDOM = this.attachShadow({mode:"open"});
      }

     set club(club){
          this._club = club;
          this.render(); 
     }

     render(){
          this.shadowDOM.innerHTML = `
            <div class="card col-md-4">
               <img class="fan-art-club" src="${this._club.strTeamBadge}" alt="Fan Art">
               <div class="club-info">
                   <h2>${this._club.strTeam}</h2>
                   <p>${this._club.strDescriptionEN}</p>
               </div>
            </div>`;
     }
}

customElements.define("club-item",ClubItem);
