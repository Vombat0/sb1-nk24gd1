import SwiftUI

struct RecipeListView: View {
    let recipes: [String]
    let onSelectRecipe: (String) -> Void

    var body: some View {
        List(recipes, id: \.self) { recipe in
            Button(action: { onSelectRecipe(recipe) }) {
                HStack {
                    Text(recipe)
                    Spacer()
                    Image(systemName: "chevron.right")
                        .foregroundColor(.gray)
                }
            }
        }
    }
}