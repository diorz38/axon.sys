import React, { useState } from 'react'
import { Pagination } from './Pagination'

export interface CardGridProps<T> {
  data: T[]
  renderItem: (item: T) => React.ReactNode
  itemsPerRow?: number
  pageSize?: number
}

export function CardGrid<T>({ data, renderItem, itemsPerRow = 3, pageSize = 9 }: CardGridProps<T>) {
  const [currentPage, setCurrentPage] = useState(1)
  
  const totalPages = Math.ceil(data.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentData = data.slice(startIndex, endIndex)

  const gridClass = itemsPerRow === 3 
    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
    : itemsPerRow === 2
    ? 'grid-cols-1 md:grid-cols-2'
    : 'grid-cols-1'

  return (
    <div>
      <div className={`grid ${gridClass} gap-4 md:gap-6 mb-6`}>
        {currentData.map((item, index) => (
          <div key={index}>
            {renderItem(item)}
          </div>
        ))}
      </div>
      
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          pageSize={pageSize}
          totalItems={data.length}
        />
      )}
    </div>
  )
}
