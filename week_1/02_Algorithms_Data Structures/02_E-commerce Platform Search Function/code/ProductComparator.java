import java.util.Comparator;

public class ProductComparator implements Comparator<Product> {
    @Override
    public int compare(Product p1, Product p2){
        return p1.productName.compareTo(p2.productName);
    }
}