import {dinos}  from './dmg.js';



let tableBody = dinos.map(dino => {
    console.log(`🚀 ~ file: stats.js:64 ~ tableBody ~ dino:`, dino);
    const dinosWithGrowTime= dino.growTime;
      let growListHTML =
          `<ul class="grow-list__list">
          <li class="grow-list__item">
              <dl class="d-flex"><dt class="mr-2">hatch:</dt>
                  <dd>${dinosWithGrowTime?.hatch}</dd>
              </dl>
          </li>
          <li class="grow-list__item">
              <dl class="d-flex"><dt class="mr-2">juvie:</dt>
                  <dd>${dinosWithGrowTime?.juvie}</dd>
              </dl>
          </li>
          <li class="grow-list__item">
              <dl class="d-flex"><dt class="mr-2">sub:</dt>
                  <dd>${dinosWithGrowTime?.sub}</dd>
              </dl>
          </li>
          <li class="grow-list__item">
              <dl class="d-flex"><dt class="mr-2">adult:</dt>
                  <dd>${dinosWithGrowTime?.adult}</dd>
              </dl>
          </li>
      </ul>`

      return `
          <tr data-game-mod="${dino.gameMod}">
              <td>
                  <div class="d-flex align-items-center">
                      <svg class="svg-icon mr-2 stats-table__dino-icon">
                          <use xlink:href="img/theme/sprite.symbol.svg#si-${dino.icon}" />
                      </svg>${dino.Name}
                  </div>
              </td>
              <td class="text-center" data-sort="1">
                  <i class="d-inline-block" data-tippy-content="${dino.Diet}">
                      <svg class="svg-icon">
                          <use xlink:href="img/theme/sprite.symbol.svg#si-${dino.Diet==='Carnivore'?'meat':'leaf'}" />
                      </svg>
                  </i>
              </td>
              <td>${dino.Damage}</td>
              <td data-sort="0">${dino.Alt}</td>
              <td>${dino.Health}</td>
              <td>${dino.Mass}</td>
              <td>${dino.Speed}</td>
              <td>${dino.Ambush===undefined?'unknown':dino.Ambush}</td>
              <td>${dino.SprintDuration===undefined?'unknown':dino.SprintDuration}</td>
              <td>${dino.Bleed===undefined?'unknown':dino.Bleed}</td>
              <td>
                  <div class="d-inline-flex align-items-center js-tooltip stats-table__grow-list"
                      data-tippy-placement="right-start" data-tippy-trigger="mouseenter">
                      <span>${dino.Growth}</span>
                      <i class="ml-2 stats-table__list-icon">
                          <svg class="svg-icon d-block">
                              <use xlink:href="img/theme/sprite.symbol.svg#si-list" />
                          </svg>
                      </i>
                      <div class="d-none js-tooltip-content grow-list">
                          <ul class="grow-list__list">
                              ${growListHTML}
                          </ul>
                      </div>
                  </div>
              </td>
          </tr>
      `;
  }).join('');
;

  document.querySelector(".js-table-sort tbody").innerHTML = tableBody;
