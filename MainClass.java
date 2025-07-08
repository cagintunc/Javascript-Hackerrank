

import java.utils.*;


public class MainClass {

    public static void main(String[] args) {
        MainClass main = new MainClass();
        
    }

}

public class TreeNode {
    private T content;
    private TreeNode parent;
    private TreeNode left;
    private TreeNode right;

    public TreeNode(T content) {
        this.content = content;
    }

    public TreeNode() {
        super(null);
    }

    public void setContent(T content) {
        this.content = content;
    }

    public void setParent(TreeNode parent) {
        this.parent = parent;
    }

    public void setLeft(TreeNode left) {
        this.left = left;
    }

    public void setRight(TreeNode right) {
        this.right = right;
    }

    public T getContent() {
        return this.content;
    }

    public TreeNode getParent() {
        return this.parent;
    }

    public TreeNode getLeft() {
        return this.left;
    }

    public TreeNode getRight() {
        return this.right;
    }
     
}


public abstract class Heap {
    private TreeNode root;
    private int numberOfNodes;
    public Heap() {

    }

    
}