import { useAtom } from "jotai";
import { firstNameAtom, lastnameAtom, ageAtom, hobbiesAtom, hobbiesListAtom } from "../atoms/user.atom";


const User = () => {
  const [firstName, setFirstName] = useAtom(firstNameAtom)
  const [lastName, setLastName] = useAtom(lastnameAtom)
  const [age, setAge] = useAtom(ageAtom)
  const [hobby, setHobby] = useAtom(hobbiesAtom)
  const [hobbiesList] = useAtom(hobbiesListAtom)

  const handleHobbyChange = (hobby: string, checked: boolean) => {
    setHobby(prev => {
      if (checked) {
        return prev.includes(hobby) ? prev : [...prev, hobby]
      } else {
        return prev.filter(h => h !== hobby)
      }
    })
  }

  const handleClear = () => {
    setFirstName("")
    setLastName("")
    setAge(0)
    setHobby([])
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
      <form className="flex flex-col space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name:
          </label>
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder="Enter first name here"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name:
          </label>
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            placeholder="Enter last name here"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Age:
          </label>
          <input
            type="number"
            value={age}
            onChange={e => setAge(Number(e.target.value))}
            placeholder="Enter age here"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <fieldset className="border border-gray-300 rounded-lg p-3">
          <legend className="text-sm font-medium text-gray-700 mb-2">Hobbies:</legend>
          <div className="flex flex-wrap gap-3">
            {hobbiesList.map(h => (
              <label key={h} className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  value={h}
                  checked={hobby.includes(h)}
                  onChange={e => handleHobbyChange(h, e.target.checked)}
                  className="rounded"
                />
                {h}
              </label>
            ))}
          </div>
        </fieldset>

        <button
          type="button"
          onClick={handleClear}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
        >
          Clear
        </button>
      </form>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Your details:</h2>
        <ul className="pl-5 list-none flex flex-col items-start">
          <li><strong>First Name:</strong> {firstName}</li>
          <li><strong>Last Name:</strong> {lastName}</li>
          <li><strong>Age:</strong> {age}</li>
          <li><strong>Hobbies:</strong> {hobby.join(", ")}</li>
        </ul>
      </div>
    </div>

  )
}

export default User