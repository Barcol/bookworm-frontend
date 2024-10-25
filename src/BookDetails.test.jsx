import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import BookDetails from './BookDetails'

test('Stops reading', async () => {
    const mockBook = {
        id: 1,
        readings: [{ startDate: new Date(), id: 2137 }],
        title: 'Test Book',
    }

    const mockSetBooks = jest.fn((updateFn) => {
        const updatedBooks = updateFn([mockBook])
        mockBook.readings = updatedBooks[0].readings
    })

    const mockOnBackPress = jest.fn()

    const { rerender } = render(
        <BookDetails
            book={mockBook}
            setBooks={mockSetBooks}
            onBackPress={mockOnBackPress}
        />
    )

    await userEvent.click(screen.getByText('FACET MA JUŻ DOŚĆ'))

    await waitFor(() => expect(mockSetBooks).toHaveBeenCalled())

    rerender(
        <BookDetails
            book={mockBook}
            setBooks={mockSetBooks}
            onBackPress={mockOnBackPress}
        />
    )

    expect(screen.getByText('STAART')).toBeInTheDocument()
})
