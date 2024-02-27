//
//  RNTextView.m
//  TestRn
//
//  Created by 岳立兴 on 2024/2/26.
//

#import "RNTextView.h"

@interface RNTextView()

@property (nonatomic, retain) UILabel *label;

@end

@implementation RNTextView

- (instancetype)initWithFrame:(CGRect)frame {
  if (self = [super initWithFrame:frame]) {
    self.label = [[UILabel alloc] init];
    self.label.textColor = [UIColor blackColor];
    self.label.font = [UIFont systemFontOfSize:20];
    
    [[NSNotificationCenter defaultCenter] addObserverForName:@"noti.rntextview.test" object:nil queue:[NSOperationQueue mainQueue] usingBlock:^(NSNotification * _Nonnull notification) {
      if (self.callback) {
        self.callback(@{@"aa": @123123});
        NSLog(@"RNTextView.callback");
      }
    }];
  }
  return self;
}

- (void)layoutSubviews {
  [super layoutSubviews];
  
  self.label.frame = self.bounds;
}


- (void)setText:(NSString *)text {
//  _text = text;
  NSLog(@"text: %@", text);
  self.label.text = text;
//  [self.label sizeToFit];
//  CGRect oldFrame = self.frame;
//  self.frame = CGRectMake(oldFrame.origin.x, oldFrame.origin.y, self.label.frame.size.width, self.label.frame.size.height);
  
  
}

- (void)setCallback:(RCTDirectEventBlock)callback {
  _callback = callback;
  
//  callback(@{@"111":@"222"});
}

- (void)dealloc {
  [[NSNotificationCenter defaultCenter] removeObserver:self];
}

@end
