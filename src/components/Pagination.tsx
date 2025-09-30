import React from 'react';
import { Pagination as BSPagination } from 'react-bootstrap'; 

function Pagination() {
  return (
    <nav aria-label="Navegación de páginas" className="pagination-section my-4"> 
      <BSPagination className="justify-content-center"> 
        <BSPagination.Prev disabled>

          Anterior
        </BSPagination.Prev>

        <BSPagination.Item active>

          1
        </BSPagination.Item>

        <BSPagination.Item>

          2
        </BSPagination.Item>

        <BSPagination.Item>

          3
        </BSPagination.Item>

        <BSPagination.Next>

          Siguiente
        </BSPagination.Next>
      </BSPagination>
    </nav>
  );
}

export default Pagination;