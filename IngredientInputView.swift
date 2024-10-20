import SwiftUI

struct IngredientInputView: View {
    @Binding var ingredients: [String]
    let onSubmit: () -> Void
    @State private var newIngredient = ""

    var body: some View {
        VStack {
            HStack {
                TextField("Bir malzeme girin", text: $newIngredient)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                
                Button(action: addIngredient) {
                    Image(systemName: "plus.circle.fill")
                        .foregroundColor(.green)
                }
            }
            
            List {
                ForEach(ingredients, id: \.self) { ingredient in
                    Text(ingredient)
                }
                .onDelete(perform: deleteIngredient)
            }
            
            Button("Tarifleri Bul", action: onSubmit)
                .padding()
                .background(Color.blue)
                .foregroundColor(.white)
                .cornerRadius(8)
        }
        .padding()
    }
    
    private func addIngredient() {
        if !newIngredient.isEmpty {
            ingredients.append(newIngredient)
            newIngredient = ""
        }
    }
    
    private func deleteIngredient(at offsets: IndexSet) {
        ingredients.remove(atOffsets: offsets)
    }
}