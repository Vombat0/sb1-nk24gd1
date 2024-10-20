import SwiftUI

struct RecipeDetailsView: View {
    let recipe: String
    let details: String

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            Text(recipe)
                .font(.title)
                .fontWeight(.bold)
            
            Text(details)
                .font(.body)
        }
        .padding()
    }
}