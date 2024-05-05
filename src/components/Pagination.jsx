import React from "react";

function Pagination() {
  return (
    <div>
      <div class="pagination:container">
        <div class="pagination:number arrow">
          <svg width="18" height="18">
            <use xlink:href="#left" />
          </svg>
          <span class="arrow:text">Previous</span>
        </div>

        <div class="pagination:number">1</div>
        <div class="pagination:number">2</div>

        <div class="pagination:number pagination:active">3</div>

        <div class="pagination:number">4</div>

        <div class="pagination:number">540</div>

        <div class="pagination:number arrow">
          <svg width="18" height="18">
            <use xlink:href="#right" />
          </svg>
        </div>
      </div>

      <svg class="hide">
        <symbol
          id="left"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </symbol>
        <symbol
          id="right"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </symbol>
      </svg>
    </div>
  );
}

export default Pagination;
