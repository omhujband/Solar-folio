import React from 'react'

// This component extracts content from your existing page components
export function extractContent(PageComponent) {
  // For now, we'll just render the page component
  // Later you can refactor pages to export just content
  return <PageComponent />
}

// Helper to get just the children from SectionLayout pages
export function getContentOnly(children) {
  return children
}