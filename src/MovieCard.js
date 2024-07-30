const MovieCard = ({title, description, posterURL, rating}) => {
    return (
        <div class="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
            <img src="https://loremflickr.com/800/600/girl" class="shadow rounded-lg overflow-hidden border" />
            <div class="mt-8">
                <h4 class="font-bold text-xl">{title}</h4>
                <p>{rating} ⭐</p>
                <p class="mt-2 text-gray-600">{description}</p>
                <div class="mt-5">
                    <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
                </div>
            </div>
        </div>
    )
}

export default MovieCard